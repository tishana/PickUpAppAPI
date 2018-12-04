const mongoose = require("./connection");
const seeds = require("./seedData");
const Driver = require("../models/Driver");

mongoose.Promise = Promise;

Driver.remove({})
  .then(() => {
    Driver.collection.insert(seeds)
      .then((seeds) => {
        console.log(seeds)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
