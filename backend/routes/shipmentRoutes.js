const express = require('express');
const shipmentController = require('../controllers/shipmentController');
const router = express.Router();

router.post('/', shipmentController.createShipment);
router.get('/', shipmentController.getAllShipments);

module.exports = router;