const mongoose = require("mongoose");

const Order = new mongoose.Schema({
  name: String,
  email: String,
  pickUpAddress: String,
  dropOffAddress: String,
  time : { type: Number },
  driver: {
    type: Schema.Types.ObjectId,
    ref: "Driver"
  }
});

module.exports = mongoose.model("Order", Order);