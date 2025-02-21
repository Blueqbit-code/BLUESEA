const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Ensure this line is correct
const shipmentRoutes = require('./routes/shipmentRoutes');
const bidRoutes = require('./routes/bidRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the BlueQbit Portal API!');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/shipments', shipmentRoutes);
app.use('/api/bids', bidRoutes);

module.exports = app;