// File: backend/routes/matchRoutes.js
const express = require('express');
const matchController = require('../controllers/matchController');

const router = express.Router();

// Match carriers for a shipment
router.post('/match', matchController.matchCarriers);

module.exports = router;