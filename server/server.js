const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(morgan('dev'));

// Static uploads folder
const uploadsPath = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsPath));

// Static parent assets folder (for logo, sample images, etc.)
const parentAssetsPath = path.join(__dirname, '..', 'assets');
app.use('/assets', express.static(parentAssetsPath));

// Health check endpoint for Frontend Auto-Discovery
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    system: "K. E. Society's Rajarambapu Institute of Technology (RIT) Central Event Management Portal API",
    version: '1.0.0',
    mode: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Mount Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/departments', require('./routes/departments'));
app.use('/api/events', require('./routes/events'));
app.use('/api/registrations', require('./routes/registrations'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/audit-logs', require('./routes/auditLogs'));
app.use('/api/notifications', require('./routes/notifications'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/backup', require('./routes/backup'));

// Serve frontend web portal statically
app.use(express.static(path.join(__dirname, '..')));

// 404 Fallback
app.use((req, res) => {
  res.status(404).json({ error: `Cannot ${req.method} ${req.url}. Endpoint not found on RIT API.` });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

// Start Server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`================================================================`);
    console.log(`🚀 RIT Central Event Management Portal - Backend Server Running`);
    console.log(`📍 REST API URL: http://localhost:${PORT}/api`);
    console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`================================================================`);
  });
}

module.exports = app;
