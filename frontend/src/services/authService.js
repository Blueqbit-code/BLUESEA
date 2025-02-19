import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';  // Backend API base URL

// Register User
const register = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/register`, { username, email, password });
  return response.data;
};

// Login User
const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export default { register, login };
