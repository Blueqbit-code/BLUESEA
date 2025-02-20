import React, { useEffect, useState } from 'react';
import { getOpenShipments } from '../../api';
import BidForm from './BidForm';

const OpenShipments = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchShipments = async () => {
      const response = await getOpenShipments();
      setShipments(response);
    };
    fetchShipments();
  }, []);

  return (
    <div>
      <h2>Open Shipments</h2>
      {shipments.map((shipment) => (
        <div key={shipment.shipment_id}>
          <p>Origin: {shipment.origin}</p>
          <p>Destination: {shipment.destination}</p>
          <p>Cargo Type: {shipment.cargo_type}</p>
          <p>Weight: {shipment.weight}</p>
          <p>Delivery Timeline: {shipment.delivery_timeline}</p>
          <BidForm shipment_id={shipment.shipment_id} />
        </div>
      ))}
    </div>
  );
};

export default OpenShipments;