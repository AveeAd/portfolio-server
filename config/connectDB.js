const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log("mongodb connected at localhost");
  });
};

module.exports = connectDB;
