const { Shipment, Bid } = require('../models');

// Get all open shipments (for carriers to bid on)
exports.getOpenShipments = async (req, res) => {
  try {
    const shipments = await Shipment.findAll({ where: { status: 'open' } });
    res.status(200).json(shipments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all bids submitted by a carrier
exports.getCarrierBids = async (req, res) => {
  try {
    const { carrier_id } = req.params;
    const bids = await Bid.findAll({ where: { carrier_id } });
    res.status(200).json(bids);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};