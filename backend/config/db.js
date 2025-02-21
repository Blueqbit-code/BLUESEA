const mongoose = require('mongoose');

const uri = "mongodb+srv://arrigo:ciaociaobambina@cluster0.wiaim.mongodb.net/blueqbit?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected: Atlas Cluster');
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;