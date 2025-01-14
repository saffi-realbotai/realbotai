const express = require('express');
const router = express.Router();
const AnalyticsController = require('../controllers/analyticsController');

// Log a new analytics event
router.post('/create', AnalyticsController.createAnalytics);

// Get all analytics
router.get('/', AnalyticsController.getAllAnalytics);

// Get analytics by ID
router.get('/:id', AnalyticsController.getAnalyticsById);

// Delete analytics data
router.delete('/:id', AnalyticsController.deleteAnalytics);

module.exports = router;
