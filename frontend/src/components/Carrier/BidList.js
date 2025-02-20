import React, { useEffect, useState } from 'react';
import { getCarrierBids } from '../../api';

const BidList = ({ carrier_id }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBids = async () => {
      const response = await getCarrierBids(carrier_id);
      setBids(response);
    };
    fetchBids();
  }, [carrier_id]);

  return (
    <div>
      <h2>Your Bids</h2>
      {bids.map((bid) => (
        <div key={bid.bid_id}>
          <p>Shipment ID: {bid.shipment_id}</p>
          <p>Quote Amount: {bid.quote_amount}</p>
          <p>Delivery Time: {bid.delivery_time}</p>
          <p>Status: {bid.status}</p>
        </div>
      ))}
    </div>
  );
};

export default BidList;