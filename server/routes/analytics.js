const express = require('express');
const router = express.Router();
const prisma = require('../db');

// GET /api/analytics/overview - Overall KPIs
router.get('/overview', async (req, res) => {
  try {
    const today = '2026-08-20'; // Current contextual date

    const [
      totalDepts,
      totalEvents,
      upcomingEvents,
      completedEvents,
      totalRegistrations,
      eventsAgg
    ] = await Promise.all([
      prisma.department.count(),
      prisma.event.count({ where: { status: 'Published' } }),
      prisma.event.count({ where: { status: 'Published', event_date: { gte: today } } }),
      prisma.event.count({ where: { status: 'Published', event_date: { lt: today } } }),
      prisma.registration.count(),
      prisma.event.aggregate({
        _sum: {
          views: true,
          downloads: true
        }
      })
    ]);

    res.json({
      totalDepartments: totalDepts,
      totalEvents,
      upcomingEvents,
      completedEvents,
      totalParticipants: totalRegistrations,
      totalViews: eventsAgg._sum.views || 0,
      totalDownloads: eventsAgg._sum.downloads || 0
    });
  } catch (error) {
    console.error('Analytics overview error:', error);
    res.status(500).json({ error: 'Failed to generate analytics overview.' });
  }
});

// GET /api/analytics/charts - Chart datasets
router.get('/charts', async (req, res) => {
  try {
    const departments = await prisma.department.findMany({
      include: {
        events: {
          select: { id: true, academic_year: true, event_date: true, views: true, title: true }
        }
      }
    });

    // 1. Department Distribution
    const deptDistribution = departments.map(d => ({
      code: d.code,
      name: d.name,
      count: d.events.length
    }));

    // 2. Academic Year Growth
    const allEvents = await prisma.event.findMany({
      select: { academic_year: true, event_date: true, views: true, title: true }
    });

    const yearCounts = {};
    const monthCounts = {
      Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0,
      Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0
    };
    const monthKeys = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    allEvents.forEach(e => {
      // Year counts
      yearCounts[e.academic_year] = (yearCounts[e.academic_year] || 0) + 1;

      // Month counts
      if (e.event_date) {
        const monthNum = parseInt(e.event_date.split('-')[1], 10) - 1;
        if (monthNum >= 0 && monthNum < 12) {
          monthCounts[monthKeys[monthNum]]++;
        }
      }
    });

    // 3. Most Popular Events
    const popularEvents = await prisma.event.findMany({
      where: { status: 'Published' },
      select: { title: true, views: true, downloads: true },
      orderBy: { views: 'desc' },
      take: 5
    });

    res.json({
      departments: deptDistribution,
      years: yearCounts,
      months: monthCounts,
      popular: popularEvents
    });
  } catch (error) {
    console.error('Charts analytics error:', error);
    res.status(500).json({ error: 'Failed to generate charts analytics.' });
  }
});

// GET /api/analytics/visitors - Visitor and traffic sources analytics
router.get('/visitors', async (req, res) => {
  try {
    const stats = await prisma.visitorStat.findMany({
      orderBy: { date: 'asc' },
      take: 14
    });

    // Default simulation data if table is fresh
    let visitorData = stats;
    if (stats.length === 0) {
      visitorData = [
        { date: '2026-08-07', daily_visitors: 420, campus_wifi: 230, social_media: 90, google_search: 60, direct_traffic: 30, qr_code_scans: 10 },
        { date: '2026-08-08', daily_visitors: 510, campus_wifi: 280, social_media: 110, google_search: 70, direct_traffic: 35, qr_code_scans: 15 },
        { date: '2026-08-09', daily_visitors: 380, campus_wifi: 190, social_media: 95, google_search: 55, direct_traffic: 25, qr_code_scans: 15 },
        { date: '2026-08-10', daily_visitors: 620, campus_wifi: 340, social_media: 130, google_search: 85, direct_traffic: 45, qr_code_scans: 20 },
        { date: '2026-08-11', daily_visitors: 750, campus_wifi: 410, social_media: 160, google_search: 105, direct_traffic: 50, qr_code_scans: 25 },
        { date: '2026-08-12', daily_visitors: 820, campus_wifi: 450, social_media: 180, google_search: 110, direct_traffic: 55, qr_code_scans: 25 },
        { date: '2026-08-13', daily_visitors: 690, campus_wifi: 380, social_media: 150, google_search: 95, direct_traffic: 45, qr_code_scans: 20 },
        { date: '2026-08-14', daily_visitors: 890, campus_wifi: 490, social_media: 190, google_search: 120, direct_traffic: 60, qr_code_scans: 30 },
        { date: '2026-08-15', daily_visitors: 980, campus_wifi: 520, social_media: 210, google_search: 140, direct_traffic: 70, qr_code_scans: 40 },
        { date: '2026-08-16', daily_visitors: 540, campus_wifi: 270, social_media: 130, google_search: 80, direct_traffic: 40, qr_code_scans: 20 },
        { date: '2026-08-17', daily_visitors: 780, campus_wifi: 430, social_media: 170, google_search: 110, direct_traffic: 50, qr_code_scans: 20 },
        { date: '2026-08-18', daily_visitors: 860, campus_wifi: 470, social_media: 190, google_search: 120, direct_traffic: 55, qr_code_scans: 25 },
        { date: '2026-08-19', daily_visitors: 920, campus_wifi: 500, social_media: 200, google_search: 130, direct_traffic: 60, qr_code_scans: 30 },
        { date: '2026-08-20', daily_visitors: 1040, campus_wifi: 580, social_media: 230, google_search: 140, direct_traffic: 65, qr_code_scans: 25 }
      ];
    }

    // Aggregate traffic sources
    const trafficTotals = {
      'Campus Wi-Fi (Students & Staff)': visitorData.reduce((acc, v) => acc + (v.campus_wifi || 0), 0),
      'Social Media & WhatsApp': visitorData.reduce((acc, v) => acc + (v.social_media || 0), 0),
      'Google Search': visitorData.reduce((acc, v) => acc + (v.google_search || 0), 0),
      'Direct URL': visitorData.reduce((acc, v) => acc + (v.direct_traffic || 0), 0),
      'Campus Poster QR Scans': visitorData.reduce((acc, v) => acc + (v.qr_code_scans || 0), 0)
    };

    res.json({
      daily: visitorData,
      trafficSources: trafficTotals,
      totalVisitorsMonth: visitorData.reduce((acc, v) => acc + (v.daily_visitors || 0), 0)
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve visitor stats.' });
  }
});

module.exports = router;
