const express = require('express');
const router = express.Router();
const prisma = require('../db');
const { authenticateToken, requireDeptAdminOrSuperAdmin } = require('../middleware/auth');

// Helper to generate unique RIT registration ticket
function generateTicketId() {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `RIT-REG-${randomNum}`;
}

// POST /api/registrations - Public participant registration
router.post('/', async (req, res) => {
  try {
    const { event_id, name, email, department_id, tx_id, paid } = req.body;

    if (!event_id || !name || !email || !department_id) {
      return res.status(400).json({ error: 'Name, email, department, and event selection are required.' });
    }

    const event = await prisma.event.findUnique({
      where: { id: parseInt(event_id) },
      include: { department: true }
    });

    if (!event) {
      return res.status(404).json({ error: 'Selected event not found.' });
    }

    // Check deadline
    const today = new Date().toISOString().split('T')[0];
    if (event.registration_deadline && today > event.registration_deadline) {
      return res.status(400).json({ error: 'Registration deadline for this event has expired.' });
    }

    const ticket_id = generateTicketId();
    const isPaid = Boolean(paid) || (event.fees === 'Free' || !event.fees);

    const registration = await prisma.registration.create({
      data: {
        event_id: parseInt(event_id),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        department_id: parseInt(department_id),
        ticket_id,
        paid: isPaid,
        tx_id: tx_id ? tx_id.trim() : null,
        checked_in: false
      }
    });

    // Notify organizers
    try {
      await prisma.notification.create({
        data: {
          title: 'New Event Registration',
          message: `${name} registered for ${event.title} (Ticket: ${ticket_id})`,
          department_id: event.department_id,
          role_target: 'dept_admin'
        }
      });
    } catch (notifErr) {
      console.warn('Notification failed:', notifErr);
    }

    res.status(201).json({
      message: 'Registration successful!',
      registration: {
        id: registration.id,
        ticketId: registration.ticket_id,
        name: registration.name,
        email: registration.email,
        eventTitle: event.title,
        eventDate: event.event_date,
        eventTime: event.event_time,
        venue: event.venue,
        paid: registration.paid
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Failed to process registration.' });
  }
});

// GET /api/registrations/event/:id - List participants for an event
router.get('/event/:id', authenticateToken, requireDeptAdminOrSuperAdmin, async (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    const event = await prisma.event.findUnique({ where: { id: eventId } });

    if (!event) {
      return res.status(404).json({ error: 'Event not found.' });
    }

    if (req.user.role !== 'super_admin' && req.user.department_id !== event.department_id) {
      return res.status(403).json({ error: 'Permission denied.' });
    }

    const registrations = await prisma.registration.findMany({
      where: { event_id: eventId },
      orderBy: { created_at: 'desc' }
    });

    res.json(registrations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve registrations.' });
  }
});

// PATCH /api/registrations/:id/checkin - Toggle attendance checked-in status
router.patch('/:id/checkin', authenticateToken, requireDeptAdminOrSuperAdmin, async (req, res) => {
  try {
    const regId = parseInt(req.params.id);
    const reg = await prisma.registration.findUnique({
      where: { id: regId },
      include: { event: true }
    });

    if (!reg) {
      return res.status(404).json({ error: 'Registration record not found.' });
    }

    if (req.user.role !== 'super_admin' && req.user.department_id !== reg.event.department_id) {
      return res.status(403).json({ error: 'Permission denied.' });
    }

    const updated = await prisma.registration.update({
      where: { id: regId },
      data: { checked_in: !reg.checked_in }
    });

    res.json({
      message: `Checked-in status updated to ${updated.checked_in}.`,
      checked_in: updated.checked_in
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to toggle check-in.' });
  }
});

// GET /api/registrations/verify/:query - Search for ticket ID or email to generate Certificate
router.get('/verify/:query', async (req, res) => {
  try {
    const query = decodeURIComponent(req.params.query).trim();

    const registration = await prisma.registration.findFirst({
      where: {
        OR: [
          { ticket_id: { equals: query } },
          { email: { equals: query.toLowerCase() } }
        ]
      },
      include: {
        event: {
          include: { department: true }
        }
      }
    });

    if (!registration) {
      return res.status(404).json({ error: 'No matching registration found for this Ticket ID or Email.' });
    }

    res.json({
      found: true,
      ticketId: registration.ticket_id,
      studentName: registration.name,
      studentEmail: registration.email,
      eventTitle: registration.event.title,
      eventCategory: registration.event.category,
      academicYear: registration.event.academic_year,
      departmentName: registration.event.department.name,
      departmentCode: registration.event.department.code,
      eventDate: registration.event.event_date,
      facultyCoordinator: registration.event.faculty_coordinator,
      checkedIn: registration.checked_in
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to verify certificate eligibility.' });
  }
});

module.exports = router;
