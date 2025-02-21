 // Load environment variables
require('dotenv').config();

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Add this line

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const shipmentRoutes = require('./routes/shipmentRoutes');
const bidRoutes = require('./routes/bidRoutes');

// Create Express app
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from frontend
  credentials: true, // Allow cookies and credentials
}));
app.use(express.json()); // Parse JSON request bodies

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the BlueQbit Portal Backend!');
});

// POST route for root URL
app.post('/', (req, res) => {
  res.send('POST request received at the root URL!');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/shipments', shipmentRoutes);
app.use('/api/bids', bidRoutes);

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL); // Connect to MongoDB
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if connection fails
  }
};

// Start the server after connecting to the database
const startServer = async () => {
  await connectDB(); // Connect to the database
  const PORT = process.env.PORT || 5000; // Use the specified port or default to 5000
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

// Start the server
startServer();

// Export the app for testing
module.exports = app;