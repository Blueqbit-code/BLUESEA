const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');  // Import auth routes

dotenv.config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());  // To parse JSON data
app.use(cors());  // To allow cross-origin requests
app.use(express.urlencoded({ extended: true })); // Allow form data parsing

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

  // Test Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Import Routes
app.use("/api/auth", authRoutes); // Adjust based on your routes

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
