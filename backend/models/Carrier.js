const mongoose = require('mongoose');

const carrierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  serviceAreas: {
    type: [String], // List of countries or regions the carrier serves
    required: true,
  },
  shippingRates: {
    type: [
      {
        weightRange: { type: String, required: true }, // e.g., "0-5kg"
        rate: { type: Number, required: true }, // e.g., 10.99
      },
    ],
    required: true,
  },
  deliveryTime: {
    type: String, // e.g., "3-5 business days"
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Carrier = mongoose.model('Carrier', carrierSchema);
module.exports = Carrier;