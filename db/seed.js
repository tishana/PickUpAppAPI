const mongoose = require("./connection");
const seeds = require("./seedData");
const orderSeeds = require("./orderData")
const Order = require("../models/Order")
const Driver = require("../models/Driver");

mongoose.Promise = Promise;

Driver.remove({})
  .then(() => {
    Driver.collection.insert(seeds)
      .then((seeds) => {
        console.log(seeds)
        // process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })

  Order.remove({})
  .then(() => {
    Order.collection.insert(orderSeeds)
      .then((orderSeeds) => {
        console.log(orderSeeds)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
