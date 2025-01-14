const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  level: {
    type: String, // e.g., 'info', 'warn', 'error'
    required: true
  },
  message: {
    type: String,
    required: true
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed, // Additional information related to the log (optional)
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Log', logSchema);
