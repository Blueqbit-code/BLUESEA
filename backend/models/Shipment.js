const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema({
  shipper_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  cargo_type: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  delivery_timeline: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'booked', 'completed'],
    default: 'open',
  },
});

module.exports = mongoose.model('Shipment', ShipmentSchema);