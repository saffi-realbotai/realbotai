const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  eventType: {
    type: String, // e.g., 'userInteraction', 'error', 'system'
    required: true
  },
  data: {
    type: mongoose.Schema.Types.Mixed, // The data related to the event (could be user info, error details, etc.)
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Analytics', analyticsSchema);
