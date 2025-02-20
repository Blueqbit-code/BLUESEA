import React, { useState } from 'react';
import { submitBid } from '../../api';

const BidForm = ({ shipment_id }) => {
  const [formData, setFormData] = useState({
    carrier_id: '', // This should be fetched from the logged-in carrier
    quote_amount: '',
    delivery_time: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bidData = { ...formData, shipment_id };
    const response = await submitBid(bidData);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Quote Amount" value={formData.quote_amount} onChange={(e) => setFormData({ ...formData, quote_amount: e.target.value })} />
      <input type="date" placeholder="Delivery Time" value={formData.delivery_time} onChange={(e) => setFormData({ ...formData, delivery_time: e.target.value })} />
      <button type="submit">Submit Bid</button>
    </form>
  );
};

export default BidForm;