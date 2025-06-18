
const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');

// POST route to handle form data
router.post('/', async (req, res) => {
  try {
    const newDonor = new Donor(req.body);
    await newDonor.save();
    res.status(201).json({ message: 'Donation info saved successfully!' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Failed to save data.' });
  }
});

module.exports = router;
