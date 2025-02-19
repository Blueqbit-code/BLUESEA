const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

// User Registration
router.post(
  '/register',
  [
    // Validation
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req, res) => {
    console.log('Received registration request:', req.body); // Log the request body

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array()); // Log validation errors
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log('User already exists:', email); // Log duplicate email
        return res.status(400).json({ error: 'User already exists' });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const user = new User({ name, email, password: hashedPassword });
      await user.save();

      console.log('User registered successfully:', user); // Log successful registration
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
      console.error('Registration error:', err); // Log server errors
      res.status(500).json({ error: 'Server error' });
    }
  }
);

module.exports = router;