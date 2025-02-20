const express = require('express');
const bidController = require('../controllers/bidController');
const router = express.Router();

router.post('/', bidController.submitBid);
router.put('/:bid_id/accept', bidController.acceptBid);

module.exports = router;