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

// Driver.remove({})
//   .then((drivers) => {
//     Driver.collection.insert(drivers);
//   })
//   .then(() => {
//     process.exit();
//   });

  // Driver.remove({}).then(_ => {
  //   console.log("Dropped the DB");
  //   Driver.collection.insert(seeds).then(seededEntries => {
  //     console.log(seededEntries);
  //     mongoose.connection.close();
  //   });
  // });
  