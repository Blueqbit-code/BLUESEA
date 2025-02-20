const express = require('express');
const carrierController = require('../controllers/carrierController');
const router = express.Router();

// Get all open shipments
router.get('/shipments/open', carrierController.getOpenShipments);

// Get all bids by a carrier
router.get('/bids/:carrier_id', carrierController.getCarrierBids);

module.exports = router;