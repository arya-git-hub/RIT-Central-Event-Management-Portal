const express = require('express');
const router = express.Router();
const prisma = require('../db');
const { authenticateToken, requireSuperAdmin } = require('../middleware/auth');

// GET /api/backup/export - Export full system snapshot JSON
router.get('/export', authenticateToken, requireSuperAdmin, async (req, res) => {
  try {
    const [departments, users, events, registrations, auditLogs, notifications, visitorStats] = await Promise.all([
      prisma.department.findMany(),
      prisma.user.findMany(),
      prisma.event.findMany(),
      prisma.registration.findMany(),
      prisma.auditLog.findMany({ take: 500 }),
      prisma.notification.findMany({ take: 100 }),
      prisma.visitorStat.findMany()
    ]);

    const backupData = {
      version: '1.0.0',
      exported_at: new Date().toISOString(),
      exported_by: req.user.username,
      portal: 'RIT Central Event Management Portal',
      data: {
        departments,
        users,
        events,
        registrations,
        auditLogs,
        notifications,
        visitorStats
      }
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename=RIT_Database_Backup_${new Date().toISOString().split('T')[0]}.json`);
    res.json(backupData);
  } catch (error) {
    console.error('Backup export error:', error);
    res.status(500).json({ error: 'Failed to generate database backup.' });
  }
});

// POST /api/backup/restore - Restore system state from JSON snapshot
router.post('/restore', authenticateToken, requireSuperAdmin, async (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !data.departments || !data.events) {
      return res.status(400).json({ error: 'Invalid backup file format.' });
    }

    // Restore transactions
    await prisma.$transaction(async (tx) => {
      // 1. Clear current records
      await tx.registration.deleteMany({});
      await tx.event.deleteMany({});
      await tx.user.deleteMany({});
      await tx.department.deleteMany({});
      await tx.notification.deleteMany({});

      // 2. Insert departments
      for (const dept of data.departments) {
        await tx.department.create({
          data: {
            id: dept.id,
            code: dept.code,
            name: dept.name,
            banner_image: dept.banner_image,
            description: dept.description
          }
        });
      }

      // 3. Insert users
      for (const user of data.users) {
        await tx.user.create({
          data: {
            id: user.id,
            username: user.username,
            password: user.password,
            full_name: user.full_name,
            role: user.role,
            department_id: user.department_id
          }
        });
      }

      // 4. Insert events
      for (const ev of data.events) {
        await tx.event.create({
          data: {
            id: ev.id,
            title: ev.title,
            description: ev.description,
            department_id: ev.department_id,
            academic_year: ev.academic_year,
            category: ev.category,
            fees: ev.fees || 'Free',
            event_date: ev.event_date,
            event_time: ev.event_time || '10:00',
            venue: ev.venue,
            registration_deadline: ev.registration_deadline || ev.event_date,
            registration_link: ev.registration_link,
            payment_qr: ev.payment_qr,
            faculty_coordinator: ev.faculty_coordinator,
            student_coordinator: ev.student_coordinator,
            contact_1: ev.contact_1,
            contact_2: ev.contact_2,
            contact_3: ev.contact_3,
            poster_image: ev.poster_image,
            brochure_url: ev.brochure_url,
            video_url: ev.video_url,
            rules: typeof ev.rules === 'object' ? JSON.stringify(ev.rules) : ev.rules,
            eligibility: ev.eligibility,
            schedule: typeof ev.schedule === 'object' ? JSON.stringify(ev.schedule) : ev.schedule,
            sponsors: typeof ev.sponsors === 'object' ? JSON.stringify(ev.sponsors) : ev.sponsors,
            winners: typeof ev.winners === 'object' ? JSON.stringify(ev.winners) : ev.winners,
            faqs: typeof ev.faqs === 'object' ? JSON.stringify(ev.faqs) : ev.faqs,
            status: ev.status || 'Published',
            views: ev.views || 0,
            downloads: ev.downloads || 0
          }
        });
      }

      // 5. Insert registrations if any
      if (data.registrations && Array.isArray(data.registrations)) {
        for (const reg of data.registrations) {
          await tx.registration.create({
            data: {
              id: reg.id,
              event_id: reg.event_id,
              name: reg.name,
              email: reg.email,
              department_id: reg.department_id,
              ticket_id: reg.ticket_id,
              paid: Boolean(reg.paid),
              tx_id: reg.tx_id,
              checked_in: Boolean(reg.checked_in)
            }
          });
        }
      }
    });

    await prisma.auditLog.create({
      data: {
        user: req.user.username,
        department: 'Super Admin',
        ip: req.ip || '127.0.0.1',
        env: req.headers['user-agent'] || 'Server',
        action: 'Database Restored',
        details: 'Restored system database from JSON backup file'
      }
    });

    res.json({ message: 'Database state successfully restored from snapshot.' });
  } catch (error) {
    console.error('Restore error:', error);
    res.status(500).json({ error: 'Failed to restore database from backup.' });
  }
});

module.exports = router;
