import React, { useState } from 'react';
import axios from 'axios';

const CreateShipment = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [deliveryTimeline, setDeliveryTimeline] = useState('');
  const [cargoType, setCargoType] = useState('');
  const [shipperId, setShipperId] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/shipments', {
        origin,
        destination,
        weight: parseFloat(weight),
        delivery_timeline: deliveryTimeline,
        cargo_type: cargoType,
        shipper_id: shipperId,
      });
      setSuccess(true);
      setError(null);
      console.log('Shipment created:', response.data);
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
      setSuccess(false);
    }
  };

  return (
    <div>
      <h2>Create Shipment</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Shipment created successfully!</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Delivery Timeline"
          value={deliveryTimeline}
          onChange={(e) => setDeliveryTimeline(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Cargo Type"
          value={cargoType}
          onChange={(e) => setCargoType(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Shipper ID"
          value={shipperId}
          onChange={(e) => setShipperId(e.target.value)}
          required
        />
        <button type="submit">Create Shipment</button>
      </form>
    </div>
  );
};

export default CreateShipment;