// external import
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`Database connected with ${conn.connection.host}`);
  } catch (error) {
    console.log(`Database connection failed because ${error.message}`);
  }
};

module.exports = connectToDatabase;
