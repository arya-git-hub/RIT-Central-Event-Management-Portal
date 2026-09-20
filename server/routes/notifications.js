const express = require('express');
const router = express.Router();
const prisma = require('../db');

// GET /api/notifications - Get notifications
router.get('/', async (req, res) => {
  try {
    const { role, department_id } = req.query;

    const where = {};
    const conditions = [{ role_target: 'all' }, { role_target: null }];

    if (role) {
      conditions.push({ role_target: role });
    }

    if (department_id) {
      conditions.push({ department_id: parseInt(department_id) });
    }

    where.OR = conditions;

    const notifications = await prisma.notification.findMany({
      where,
      orderBy: { created_at: 'desc' },
      take: 20
    });

    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve notifications.' });
  }
});

// PATCH /api/notifications/:id/read - Mark notification as read
router.patch('/:id/read', async (req, res) => {
  try {
    const notifId = parseInt(req.params.id);
    const updated = await prisma.notification.update({
      where: { id: notifId },
      data: { is_read: true }
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark notification as read.' });
  }
});

// POST /api/notifications/read-all - Mark all as read
router.post('/read-all', async (req, res) => {
  try {
    const { department_id } = req.body;
    const where = {};
    if (department_id) where.department_id = parseInt(department_id);

    await prisma.notification.updateMany({
      where,
      data: { is_read: true }
    });

    res.json({ message: 'All notifications marked as read.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark notifications as read.' });
  }
});

// POST /api/notifications - Create notification
router.post('/', async (req, res) => {
  try {
    const { title, message, role_target, department_id } = req.body;

    if (!title || !message) {
      return res.status(400).json({ error: 'Title and message are required.' });
    }

    const notif = await prisma.notification.create({
      data: {
        title: title.trim(),
        message: message.trim(),
        role_target: role_target || 'all',
        department_id: department_id ? parseInt(department_id) : null
      }
    });

    res.status(201).json(notif);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send notification.' });
  }
});

module.exports = router;
