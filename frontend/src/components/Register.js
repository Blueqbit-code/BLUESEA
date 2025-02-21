import React, { useState } from 'react';
import { register } from '../api';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'shipper',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData);
      console.log('Registration successful:', response);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <select
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      >
        <option value="shipper">Shipper</option>
        <option value="carrier">Carrier</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;