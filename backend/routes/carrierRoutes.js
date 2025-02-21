const express = require('express');
const Carrier = require('../models/Carrier');
const router = express.Router();

// Add a new carrier
router.post('/', async (req, res) => {
  try {
    const carrier = new Carrier(req.body);
    await carrier.save();
    res.status(201).send(carrier);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Get all carriers
router.get('/', async (req, res) => {
  try {
    const carriers = await Carrier.find();
    res.send(carriers);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Get a single carrier by ID
router.get('/:id', async (req, res) => {
  try {
    const carrier = await Carrier.findById(req.params.id);
    if (!carrier) {
      return res.status(404).send({ error: 'Carrier not found' });
    }
    res.send(carrier);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Update a carrier
router.patch('/:id', async (req, res) => {
  try {
    const carrier = await Carrier.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!carrier) {
      return res.status(404).send({ error: 'Carrier not found' });
    }
    res.send(carrier);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Delete a carrier
router.delete('/:id', async (req, res) => {
  try {
    const carrier = await Carrier.findByIdAndDelete(req.params.id);
    if (!carrier) {
      return res.status(404).send({ error: 'Carrier not found' });
    }
    res.send({ message: 'Carrier deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;