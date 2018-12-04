const mongoose = require("./connection");
const seedData = require("./seedData.json");
const Driver = require("../models/Driver");
mongoose.Promise = Promise;


Driver.remove({})
  .then(() => {
    return Driver.collection.insert(seedData);// data is never inserted to collections, please fix. TT
  })
  .then(() => {
    process.exit();
  });
