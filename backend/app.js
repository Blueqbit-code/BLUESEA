const express = require('express');
const shipmentRoutes = require('./routes/shipmentRoutes');
const bidRoutes = require('./routes/bidRoutes');
const carrierRoutes = require('./routes/carrierRoutes'); // Add this line

const app = express();
app.use(express.json());

// Routes
app.use('/api/shipments', shipmentRoutes);
app.use('/api/bids', bidRoutes);
app.use('/api/carrier', carrierRoutes); // Add this line

module.exports = app;