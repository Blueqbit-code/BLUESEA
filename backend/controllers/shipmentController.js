exports.getAllShipments = async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const query = status ? { status } : {};
    const shipments = await Shipment.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.status(200).json(shipments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};