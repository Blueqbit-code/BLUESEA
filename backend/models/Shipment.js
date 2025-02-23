const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: [true, 'Origin is required'], // Custom error message
    trim: true, // Remove extra spaces
  },
  destination: {
    type: String,
    required: [true, 'Destination is required'], // Custom error message
    trim: true, // Remove extra spaces
  },
  weight: {
    type: Number,
    required: [true, 'Weight is required'], // Custom error message
    min: [0, 'Weight cannot be negative'], // Validation for minimum value
  },
  delivery_timeline: {
    type: String,
    required: [true, 'Delivery timeline is required'], // Custom error message
    trim: true, // Remove extra spaces
  },
  cargo_type: {
    type: String,
    required: [true, 'Cargo type is required'], // Custom error message
    trim: true, // Remove extra spaces
  },
  shipper_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Shipper ID is required'], // Custom error message
  },
  status: {
    type: String,
    enum: {
      values: ['Pending', 'In Transit', 'Delivered', 'Cancelled'], // Allowed values
      message: '{VALUE} is not a valid status', // Custom error message
    },
    default: 'Pending', // Default status
  },
  carrier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carrier',
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set on creation
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set on creation and update
  },
});

// Middleware to update the `updatedAt` field before saving
shipmentSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Shipment = mongoose.model('Shipment', shipmentSchema);
module.exports = Shipment;