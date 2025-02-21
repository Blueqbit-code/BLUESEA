const Bid = require('../models/Bid');

// Create a new bid
exports.createBid = async (req, res) => { // Ensure this function is defined
  try {
    const bid = new Bid(req.body);
    await bid.save();
    res.status(201).send(bid);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// Get all bids
exports.getAllBids = async (req, res) => {
  try {
    const bids = await Bid.find().populate('shipment').populate('carrier');
    res.send(bids);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Get a single bid by ID
exports.getBidById = async (req, res) => {
  try {
    const bid = await Bid.findById(req.params.id).populate('shipment').populate('carrier');
    if (!bid) {
      return res.status(404).send({ error: 'Bid not found' });
    }
    res.send(bid);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Update a bid
exports.updateBid = async (req, res) => {
  try {
    const bid = await Bid.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bid) {
      return res.status(404).send({ error: 'Bid not found' });
    }
    res.send(bid);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// Delete a bid
exports.deleteBid = async (req, res) => {
  try {
    const bid = await Bid.findByIdAndDelete(req.params.id);
    if (!bid) {
      return res.status(404).send({ error: 'Bid not found' });
    }
    res.send({ message: 'Bid deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};