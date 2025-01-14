const express = require('express');
const router = express.Router();
const aiServicesController = require('../controllers/aiServicesController');

// Create a new AI service
router.post('/create', aiServicesController.createAIService);

// Get all AI services
router.get('/', aiServicesController.getAllAIServices);

// Get AI service by ID
router.get('/:id', aiServicesController.getAIServiceById);

// Update AI service
router.put('/:id', aiServicesController.updateAIService);

// Delete AI service
router.delete('/:id', aiServicesController.deleteAIService);

module.exports = router;
