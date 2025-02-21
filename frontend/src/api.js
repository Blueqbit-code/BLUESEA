import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Register a user
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/api/auth/register`, userData);
  return response.data;
};

// Login a user
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, userData);
  return response.data;
};

// Create a shipment
export const createShipment = async (shipmentData, token) => {
  const response = await axios.post(`${API_URL}/api/shipments`, shipmentData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Get all shipments
export const getShipments = async (token) => {
  const response = await axios.get(`${API_URL}/api/shipments`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Submit a bid
export const submitBid = async (bidData, token) => {
  const response = await axios.post(`${API_URL}/api/bids`, bidData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Get all bids
export const getBids = async (token) => {
  const response = await axios.get(`${API_URL}/api/bids`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};