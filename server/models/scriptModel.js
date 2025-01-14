const mongoose = require('mongoose');

const scriptSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    language: { type: String, default: 'en' }, // Store the language of the script
    aiAgentId: { type: mongoose.Schema.Types.ObjectId, ref: 'AIAgent', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Script = mongoose.model('Script', scriptSchema);

module.exports = Script;
