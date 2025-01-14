const mongoose = require('mongoose');

const aiAgentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    modelType: { type: String, enum: ['gpt', 'bert', 'transformer'], required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const AIAgent = mongoose.model('AIAgent', aiAgentSchema);

module.exports = AIAgent;
