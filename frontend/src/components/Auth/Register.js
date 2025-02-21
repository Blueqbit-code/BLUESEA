import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api'; // Ensure this import is correct

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('shipper');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ email, password, role });
      localStorage.setItem('token', response.token); // Store token in localStorage
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="shipper">Shipper</option>
        <option value="carrier">Carrier</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;