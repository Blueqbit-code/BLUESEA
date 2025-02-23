import React, { useState } from 'react';
import axios from 'axios';

const UpdateShipment = ({ shipmentId }) => {
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/api/shipments/${shipmentId}`, {
        status,
      });
      setSuccess(true);
      setError(null);
      console.log('Shipment updated:', response.data);
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
      setSuccess(false);
    }
  };

  return (
    <div>
      <h2>Update Shipment</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Shipment updated successfully!</p>}
      <form onSubmit={handleSubmit}>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="In Transit">In Transit</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button type="submit">Update Shipment</button>
      </form>
    </div>
  );
};

export default UpdateShipment;