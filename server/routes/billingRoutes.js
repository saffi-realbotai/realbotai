const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

// Routes
router.post('/create', billingController.createBilling);
router.get('/:userId', billingController.getBillingByUserId);
router.put('/:userId', billingController.updateBilling);
router.delete('/:userId', billingController.deleteBilling);

module.exports = router;
