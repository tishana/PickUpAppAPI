const mongoose = require("./connection");
const seedData = require("./seedData.json");
const Driver = require("../models/Driver");
mongoose.Promise = Promise;


Driver.remove({})
  .then(() => {
    return Driver.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
