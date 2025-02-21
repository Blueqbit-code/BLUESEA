const Shipment = require('../models/Shipment');

// Create a new shipment
exports.createShipment = async (req, res) => {
  try {
    const shipment = new Shipment(req.body);
    await shipment.save();
    res.status(201).send(shipment);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// Get all shipments
exports.getAllShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find().populate('carrier');
    res.send(shipments);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Get a single shipment by ID
exports.getShipmentById = async (req, res) => { // Ensure this function is defined
  try {
    const shipment = await Shipment.findById(req.params.id).populate('carrier');
    if (!shipment) {
      return res.status(404).send({ error: 'Shipment not found' });
    }
    res.send(shipment);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Update a shipment
exports.updateShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!shipment) {
      return res.status(404).send({ error: 'Shipment not found' });
    }
    res.send(shipment);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// Delete a shipment
exports.deleteShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findByIdAndDelete(req.params.id);
    if (!shipment) {
      return res.status(404).send({ error: 'Shipment not found' });
    }
    res.send({ message: 'Shipment deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};