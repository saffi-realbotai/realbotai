const Billing = require('../models/billingModel');

// Create or Update Billing
exports.createOrUpdateBilling = async (req, res) => {
  try {
    const { userId, plan, minutes, extraMinutes, nextBillingDate } = req.body;

    const billingData = await Billing.findOneAndUpdate(
      { userId },
      { plan, minutes, extraMinutes, nextBillingDate },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: "Billing details updated", billingData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Billing Data
exports.getBillingData = async (req, res) => {
  try {
    const billingData = await Billing.findOne({ userId: req.params.userId });
    if (!billingData) {
      return res.status(404).json({ message: "Billing data not found" });
    }
    res.status(200).json(billingData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Billing Data
exports.deleteBillingData = async (req, res) => {
  try {
    const billingData = await Billing.findOneAndDelete({ userId: req.params.userId });
    if (!billingData) {
      return res.status(404).json({ message: "Billing data not found" });
    }
    res.status(200).json({ message: "Billing data deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
