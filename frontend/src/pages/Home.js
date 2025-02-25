import React, { useState } from 'react';

const Home = () => {
  const baseUrl = 'http://localhost:5000/api';

  // State for notifications
  const [notifications, setNotifications] = useState([]);

  // Register User
  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value;

    const response = await fetch(`${baseUrl}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password, role }),
    });

    const data = await response.json();
    alert(data.message || 'User registered successfully!');
  };

  // Create Shipment
  const handleCreateShipment = async (e) => {
    e.preventDefault();
    const shipperId = e.target.shipperId.value;
    const origin = e.target.origin.value;
    const destination = e.target.destination.value;
    const weight = e.target.weight.value;

    const response = await fetch(`${baseUrl}/shipments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ shipper: shipperId, origin, destination, weight }),
    });

    const data = await response.json();
    alert(data.message || 'Shipment created successfully!');
  };

  // Create Bid
  const handleCreateBid = async (e) => {
    e.preventDefault();
    const shipmentId = e.target.shipmentId.value;
    const carrierId = e.target.carrierId.value;
    const amount = e.target.amount.value;

    const response = await fetch(`${baseUrl}/bids`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ shipment: shipmentId, carrier: carrierId, amount }),
    });

    const data = await response.json();
    alert(data.message || 'Bid created successfully!');
  };

  // Fetch Notifications
  const fetchNotifications = async (userId) => {
    const response = await fetch(`${baseUrl}/notifications/${userId}`);
    const data = await response.json();
    setNotifications(data);
  };

  // Example: Fetch notifications for a specific user
  React.useEffect(() => {
    fetchNotifications('65f4c8e1f1a2b3c4d5e6f7g8');
  }, []);

  return (
    <div>
      <h1>BlueSea Platform</h1>

      {/* User Registration Form */}
      <form onSubmit={handleRegister}>
        <h2>Register User</h2>
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <select name="role" required>
          <option value="shipper">Shipper</option>
          <option value="carrier">Carrier</option>
        </select>
        <button type="submit">Register</button>
      </form>

      {/* Create Shipment Form */}
      <form onSubmit={handleCreateShipment}>
        <h2>Create Shipment</h2>
        <input type="text" name="shipperId" placeholder="Shipper ID" required />
        <input type="text" name="origin" placeholder="Origin" required />
        <input type="text" name="destination" placeholder="Destination" required />
        <input type="number" name="weight" placeholder="Weight (kg)" required />
        <button type="submit">Create Shipment</button>
      </form>

      {/* Create Bid Form */}
      <form onSubmit={handleCreateBid}>
        <h2>Create Bid</h2>
        <input type="text" name="shipmentId" placeholder="Shipment ID" required />
        <input type="text" name="carrierId" placeholder="Carrier ID" required />
        <input type="number" name="amount" placeholder="Bid Amount" required />
        <button type="submit">Create Bid</button>
      </form>

      {/* Notifications Section */}
      <div>
        <h2>Notifications</h2>
        {notifications.map((notification) => (
          <div key={notification._id} className="notification">
            <p>{notification.message}</p>
            <small>{new Date(notification.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;