const mongoose = require('mongoose');

const userPreferencesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  preferences: {
    language: {
      type: String,
      default: 'en' // Default language set to English
    },
    tone: {
      type: String,
      enum: ['formal', 'casual'],
      default: 'casual'
    },
    agentSettings: {
      type: mongoose.Schema.Types.Mixed, // Any additional settings related to AI agent's behavior
    }
  }
});

module.exports = mongoose.model('UserPreferences', userPreferencesSchema);
