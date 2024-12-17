require('dotenv').config();
const mongoose = require('mongoose');
module.exports = mongoose;

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://vigneshguru:1234567890@cluster0.wyneq.mongodb.net/', {
      useNewUrlParser: true, // deprecated but still safe for now
      useUnifiedTopology: true, // deprecated but still safe for now
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;


