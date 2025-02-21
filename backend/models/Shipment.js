const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  delivery_timeline: {
    type: String, // Ensure this is a String
    required: true,
  },
  cargo_type: {
    type: String,
    required: true,
  },
  shipper_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'In Transit', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
  carrier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carrier',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Shipment = mongoose.model('Shipment', shipmentSchema);
module.exports = Shipment;