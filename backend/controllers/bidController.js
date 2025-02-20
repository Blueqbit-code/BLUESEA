const { Bid, Shipment } = require('../models');

// Submit a bid
exports.submitBid = async (req, res) => {
  try {
    const bid = await Bid.create(req.body);
    res.status(201).json(bid);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Accept a bid
exports.acceptBid = async (req, res) => {
  try {
    const { bid_id } = req.params;
    const bid = await Bid.findByPk(bid_id);
    await bid.update({ status: 'accepted' });
    await Shipment.update({ status: 'booked' }, { where: { shipment_id: bid.shipment_id } });
    res.status(200).json({ message: 'Bid accepted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};