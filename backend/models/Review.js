// File: backend/models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reviewer ID
  reviewee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reviewee ID
  rating: { type: Number, required: true, min: 1, max: 5 }, // Rating (1-5)
  comment: { type: String }, // Optional comment
  createdAt: { type: Date, default: Date.now }, // Timestamp
});

module.exports = mongoose.model('Review', reviewSchema);