import React, { useState } from 'react';
import { createShipment } from '../../api';

const CreateShipment = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    cargo_type: '',
    weight: '',
    delivery_timeline: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createShipment(formData);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Origin" value={formData.origin} onChange={(e) => setFormData({ ...formData, origin: e.target.value })} />
      <input type="text" placeholder="Destination" value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} />
      <input type="text" placeholder="Cargo Type" value={formData.cargo_type} onChange={(e) => setFormData({ ...formData, cargo_type: e.target.value })} />
      <input type="number" placeholder="Weight" value={formData.weight} onChange={(e) => setFormData({ ...formData, weight: e.target.value })} />
      <input type="date" placeholder="Delivery Timeline" value={formData.delivery_timeline} onChange={(e) => setFormData({ ...formData, delivery_timeline: e.target.value })} />
      <button type="submit">Create Shipment</button>
    </form>
  );
};

export default CreateShipment;