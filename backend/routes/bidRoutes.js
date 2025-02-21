const express = require('express');
const {
  createBid,
  getAllBids,
  getBidById,
  updateBid,
  deleteBid,
} = require('../controllers/bidController'); // Ensure this path is correct

const router = express.Router();

// Bid routes
router.post('/', createBid); // Line 6: Ensure createBid is defined
router.get('/', getAllBids);
router.get('/:id', getBidById);
router.patch('/:id', updateBid);
router.delete('/:id', deleteBid);

module.exports = router;