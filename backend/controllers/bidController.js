exports.acceptBid = async (req, res) => {
  try {
    const { bid_id } = req.params;
    const bid = await Bid.findByIdAndUpdate(
      bid_id,
      { status: 'accepted' },
      { new: true }
    );
    await Shipment.findByIdAndUpdate(bid.shipment_id, { status: 'booked' });
    res.status(200).json({ message: 'Bid accepted', bid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};