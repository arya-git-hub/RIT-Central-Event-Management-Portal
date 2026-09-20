const express = require('express');
const router = express.Router();
const prisma = require('../db');
const { authenticateToken, requireSuperAdmin } = require('../middleware/auth');

// GET /api/audit-logs - List logs with search & filtering
router.get('/', authenticateToken, requireSuperAdmin, async (req, res) => {
  try {
    const { search, department, date, limit } = req.query;

    const where = {};
    if (department && department.trim() !== '') {
      where.department = department.trim();
    }

    if (search && search.trim() !== '') {
      const term = search.trim();
      where.OR = [
        { user: { contains: term } },
        { action: { contains: term } },
        { details: { contains: term } },
        { ip: { contains: term } }
      ];
    }

    const take = limit ? parseInt(limit) : 100;

    const logs = await prisma.auditLog.findMany({
      where,
      orderBy: { timestamp: 'desc' },
      take
    });

    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve audit logs.' });
  }
});

// POST /api/audit-logs - Create audit log entry
router.post('/', async (req, res) => {
  try {
    const { user, department, ip, env, action, details } = req.body;

    const log = await prisma.auditLog.create({
      data: {
        user: user || 'Anonymous',
        department: department || 'General',
        ip: ip || req.ip || '127.0.0.1',
        env: env || req.headers['user-agent'] || 'Browser Client',
        action: action || 'System Event',
        details: details || ''
      }
    });

    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ error: 'Failed to record audit log.' });
  }
});

// DELETE /api/audit-logs - Clear audit logs (Super Admin)
router.delete('/', authenticateToken, requireSuperAdmin, async (req, res) => {
  try {
    await prisma.auditLog.deleteMany({});
    
    // Create new initial entry
    await prisma.auditLog.create({
      data: {
        user: req.user.username,
        department: 'Super Admin',
        ip: req.ip || '127.0.0.1',
        env: req.headers['user-agent'] || 'Server',
        action: 'Cleared Audit History',
        details: 'Admin purged system activity logs.'
      }
    });

    res.json({ message: 'Audit logs cleared successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear audit logs.' });
  }
});

module.exports = router;
