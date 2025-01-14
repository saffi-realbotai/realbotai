const express = require('express');
const router = express.Router();
const ConversationController = require('../controllers/conversationController');

// Start a new conversation
router.post('/create', ConversationController.createConversation);

// Get all conversations
router.get('/', ConversationController.getAllConversations);

// Get conversation by ID
router.get('/:id', ConversationController.getConversationById);

// Update conversation
router.put('/:id', ConversationController.updateConversation);

// End conversation
router.put('/end/:id', ConversationController.endConversation);

// Delete conversation
router.delete('/:id', ConversationController.deleteConversation);

module.exports = router;
