const express = require('express');
const router = express.Router();
const AIAgentController = require('../controllers/aiAgentController');

// Create a new AI Agent
router.post('/create', AIAgentController.createAIAgent);

// Get all AI Agents
router.get('/', AIAgentController.getAllAIAgents);

// Get AI Agent by ID
router.get('/:id', AIAgentController.getAIAgentById);

// Update AI Agent
router.put('/:id', AIAgentController.updateAIAgent);

// Delete AI Agent
router.delete('/:id', AIAgentController.deleteAIAgent);

module.exports = router;
