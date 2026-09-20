const express = require('express');
const router = express.Router();
const prisma = require('../db');
const { authenticateToken, requireSuperAdmin } = require('../middleware/auth');

// GET /api/departments - List all departments with event count
router.get('/', async (req, res) => {
  try {
    const departments = await prisma.department.findMany({
      include: {
        _count: {
          select: { events: true }
        }
      },
      orderBy: { id: 'asc' }
    });

    const formatted = departments.map(d => ({
      id: d.id,
      code: d.code,
      name: d.name,
      banner_image: d.banner_image,
      description: d.description,
      events_count: d._count.events
    }));

    res.json(formatted);
  } catch (error) {
    console.error('Error fetching departments:', error);
    res.status(500).json({ error: 'Failed to retrieve departments list.' });
  }
});

// GET /api/departments/:id - Get single department details
router.get('/:id', async (req, res) => {
  try {
    const deptId = parseInt(req.params.id);
    const department = await prisma.department.findUnique({
      where: { id: deptId },
      include: {
        events: {
          where: { status: 'Published' },
          orderBy: { event_date: 'desc' }
        },
        users: {
          select: {
            id: true,
            full_name: true,
            username: true,
            role: true
          }
        }
      }
    });

    if (!department) {
      return res.status(404).json({ error: 'Department not found.' });
    }

    res.json(department);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch department.' });
  }
});

// POST /api/departments - Create department (Super Admin)
router.post('/', authenticateToken, requireSuperAdmin, async (req, res) => {
  try {
    const { code, name, banner_image, description } = req.body;
    if (!code || !name) {
      return res.status(400).json({ error: 'Department code and title are required.' });
    }

    const upperCode = code.trim().toUpperCase();
    const existing = await prisma.department.findUnique({ where: { code: upperCode } });
    if (existing) {
      return res.status(400).json({ error: `Department code '${upperCode}' already exists.` });
    }

    const dept = await prisma.department.create({
      data: {
        code: upperCode,
        name: name.trim(),
        banner_image: banner_image ? banner_image.trim() : 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200',
        description: description ? description.trim() : 'Academic Department'
      }
    });

    await prisma.auditLog.create({
      data: {
        user: req.user.username,
        department: 'Super Admin',
        ip: req.ip || '127.0.0.1',
        env: req.headers['user-agent'] || 'Server',
        action: 'Created Department',
        details: `Created branch ${dept.code} (${dept.name})`
      }
    });

    res.status(201).json(dept);
  } catch (error) {
    console.error('Department creation error:', error);
    res.status(500).json({ error: 'Failed to create department.' });
  }
});

// PUT /api/departments/:id - Update department (Super Admin)
router.put('/:id', authenticateToken, requireSuperAdmin, async (req, res) => {
  try {
    const deptId = parseInt(req.params.id);
    const { code, name, banner_image, description } = req.body;

    const dataToUpdate = {};
    if (code) dataToUpdate.code = code.trim().toUpperCase();
    if (name) dataToUpdate.name = name.trim();
    if (banner_image) dataToUpdate.banner_image = banner_image.trim();
    if (description !== undefined) dataToUpdate.description = description.trim();

    const updated = await prisma.department.update({
      where: { id: deptId },
      data: dataToUpdate
    });

    await prisma.auditLog.create({
      data: {
        user: req.user.username,
        department: 'Super Admin',
        ip: req.ip || '127.0.0.1',
        env: req.headers['user-agent'] || 'Server',
        action: 'Updated Department',
        details: `Modified branch info for ${updated.code}`
      }
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update department.' });
  }
});

// DELETE /api/departments/:id - Delete department (Super Admin)
router.delete('/:id', authenticateToken, requireSuperAdmin, async (req, res) => {
  try {
    const deptId = parseInt(req.params.id);
    const dept = await prisma.department.findUnique({ where: { id: deptId } });
    if (!dept) {
      return res.status(404).json({ error: 'Department not found.' });
    }

    await prisma.department.delete({ where: { id: deptId } });

    await prisma.auditLog.create({
      data: {
        user: req.user.username,
        department: 'Super Admin',
        ip: req.ip || '127.0.0.1',
        env: req.headers['user-agent'] || 'Server',
        action: 'Deleted Department',
        details: `Deleted department record '${dept.code}' and associated entries`
      }
    });

    res.json({ message: 'Department successfully deleted.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete department.' });
  }
});

module.exports = router;
