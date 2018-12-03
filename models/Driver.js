const mongoose = require("mongoose");

const Driver = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  available: Boolean,
  orders: [Order]
});


module.exports = mongoose.model("Driver", Driver);