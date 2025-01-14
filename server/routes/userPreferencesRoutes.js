const express = require('express');
const router = express.Router();
const UserPreferencesController = require('../controllers/userPreferencesController');

// Set user preferences
router.post('/create', UserPreferencesController.setUserPreferences);

// Get preferences for a user
router.get('/:userId', UserPreferencesController.getUserPreferences);

// Update user preferences
router.put('/:userId', UserPreferencesController.updateUserPreferences);

module.exports = router;
