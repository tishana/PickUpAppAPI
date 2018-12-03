const mongoose = require("./connection");
const Driver = require("../models/Driver");
const seedData = require("./seedData.json");
mongoose.Promise = Promise;


Driver.remove({})
  .then(() => {
    return Driver.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
