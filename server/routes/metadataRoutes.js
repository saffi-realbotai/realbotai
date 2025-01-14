const express = require('express');
const router = express.Router();
const MetadataController = require('../controllers/metadataController');

// Create new metadata
router.post('/create', MetadataController.createMetadata);

// Get all metadata
router.get('/', MetadataController.getAllMetadata);

// Get metadata by key
router.get('/:key', MetadataController.getMetadataByKey);

// Update metadata
router.put('/:key', MetadataController.updateMetadata);

// Delete metadata
router.delete('/:key', MetadataController.deleteMetadata);

module.exports = router;
