const express = require('express');
const { submitBid, getBids } = require('../controllers/bidController');
const router = express.Router();

// Submit a bid
router.post('/', submitBid);

// Get all bids
router.get('/', getBids);

router.put('/:bid_id/accept', bidController.acceptBid);

module.exports = router;