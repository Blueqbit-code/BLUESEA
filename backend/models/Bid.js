const mongoose = require('mongoose');

const BidSchema = new mongoose.Schema({
  shipment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shipment',
    required: true,
  },
  carrier_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  quote_amount: {
    type: Number,
    required: true,
  },
  delivery_time: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
  },
});

module.exports = mongoose.model('Bid', BidSchema);