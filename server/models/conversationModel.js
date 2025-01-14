const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  aiAgentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AIAgent',
    required: true
  },
  messages: [{
    sender: {
      type: String, // e.g., 'user' or 'AI'
      required: true
    },
    content: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: {
    type: Date
  },
  status: {
    type: String,
    enum: ['active', 'ended'],
    default: 'active'
  }
});

module.exports = mongoose.model('Conversation', conversationSchema);
