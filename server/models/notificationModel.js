const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  notificationType: {
    type: String, // e.g., 'system', 'reminder', 'alert'
    required: true
  },
  status: {
    type: String,
    enum: ['sent', 'read', 'unread'],
    default: 'unread'
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Notification', notificationSchema);
