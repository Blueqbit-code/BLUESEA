const express = require('express');
const { createShipment, getAllShipments } = require('../controllers/shipmentController');
const router = express.Router();

// Create a shipment
router.post('/', createShipment);

// Get all shipments
router.get('/', getAllShipments);

module.exports = router;