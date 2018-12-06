const mongoose = require("./connection");
const orderSeeds = require("./orderData")
const seeds = require("./seedData");
const Order = require("../models/Order")
const Driver = require("../models/Driver");

mongoose.Promise = Promise;

Order.remove({})
  .then(() => {
    Order.collection.insert(orderSeeds)
      .then((orderSeeds) => {
        console.log(orderSeeds)
      })
  })
  .catch((err) => {
    console.log(err)
  })

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

  