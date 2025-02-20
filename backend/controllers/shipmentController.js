const { Shipment, Bid } = require('../models');

// Create a shipment
exports.createShipment = async (req, res) => {
  try {
    const shipment = await Shipment.create(req.body);
    res.status(201).json(shipment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all shipments
exports.getAllShipments = async (req, res) => {
  try {
    const shipments = await Shipment.findAll();
    res.status(200).json(shipments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};