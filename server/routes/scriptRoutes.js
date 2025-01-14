const express = require('express');
const router = express.Router();
const ScriptController = require('../controllers/scriptController');

// Create a new script
router.post('/create', ScriptController.createScript);

// Get all scripts
router.get('/', ScriptController.getAllScripts);

// Get script by ID
router.get('/:id', ScriptController.getScriptById);

// Update script
router.put('/:id', ScriptController.updateScript);

// Delete script
router.delete('/:id', ScriptController.deleteScript);

module.exports = router;
