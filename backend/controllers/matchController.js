// File: backend/controllers/matchController.js
const Shipment = require('../models/Shipment');
const Carrier = require('../models/Carrier');

exports.matchCarriers = async (req, res) => {
  try {
    const { shipmentId } = req.body;

    // Fetch shipment details
    const shipment = await Shipment.findById(shipmentId);
    if (!shipment) {
      return res.status(404).json({ error: 'Shipment not found' });
    }

    // Find matching carriers
    const carriers = await Carrier.find({
      location: shipment.origin, // Match by location
      capacity: { $gte: shipment.weight }, // Match by capacity
    });

    res.status(200).json(carriers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to match carriers' });
  }
};