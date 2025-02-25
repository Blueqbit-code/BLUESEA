// File: backend/controllers/reviewController.js
const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  try {
    const { reviewer, reviewee, rating, comment } = req.body;

    // Create a new review
    const review = new Review({ reviewer, reviewee, rating, comment });
    await review.save();

    res.status(201).json({ message: 'Review created successfully', review });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create review' });
  }
};