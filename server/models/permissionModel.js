const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  role: {
    type: String, // e.g., 'admin', 'user', 'agent'
    required: true
  },
  permissions: [{
    type: String, // e.g., 'create', 'read', 'update', 'delete'
    required: true
  }]
});

module.exports = mongoose.model('Permission', permissionSchema);
