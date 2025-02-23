import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await axios.get('/api/shipments');
        setShipments(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch shipments');
        setLoading(false);
      }
    };

    fetchShipments();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/create-shipment">
        <button>Create Shipment</button>
      </Link>
      <h3>Shipments</h3>
      <ul>
        {shipments.map((shipment) => (
          <li key={shipment._id}>
            {shipment.origin} to {shipment.destination} - {shipment.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;