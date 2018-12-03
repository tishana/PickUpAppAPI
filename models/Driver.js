const mongoose = require("mongoose");

const Driver = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  available: Boolean,
  orders: []
});


module.exports = mongoose.model("Driver", Driver);