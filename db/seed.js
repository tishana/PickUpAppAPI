const mongoose = require("./connection");
const Order = require("../models/Order");
const seedData = require("./seedData.json");

Order.remove({})
  .then(() => {
    return Order.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
