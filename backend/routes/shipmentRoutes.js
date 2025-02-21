const express = require('express');
const {
  createShipment,
  getAllShipments,
  getShipmentById,
  updateShipment,
  deleteShipment,
} = require('../controllers/shipmentController'); // Ensure this path is correct

const router = express.Router();

// Shipment routes
router.post('/', createShipment);
router.get('/', getAllShipments);
router.get('/:id', getShipmentById); // Line 14: Ensure getShipmentById is defined
router.patch('/:id', updateShipment);
router.delete('/:id', deleteShipment);

module.exports = router;