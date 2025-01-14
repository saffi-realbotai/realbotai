const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sessionStart: {
    type: Date,
    default: Date.now
  },
  sessionEnd: {
    type: Date
  },
  status: {
    type: String,
    enum: ['active', 'ended'],
    default: 'active'
  }
});

module.exports = mongoose.model('Session', sessionSchema);
