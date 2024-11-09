const mongoose = require("mongoose");

const connectDb = async (req, res) => {
  try {
    let connect = await mongoose.connect(process.env.MONGODB_URL);
    if (connect) {
      console.log("MongoDB connected successfully!!");
    }
  } catch (error) {
    console.log("Error in connecting database", error);
  }
};

module.exports = connectDb;
