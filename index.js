const express = require("express")
const parser = require("body-parser")
const cors = require('cors')
const Driver = require('./models/Driver')
const Order = require('./models/Order')

// needed for environmental variables in frontend DE
require('dotenv').config();


const app = express()


app.use(parser.urlencoded({ extended: true }))

app.use(parser.json())
app.use(cors())



app.get('/api/drivers', (req, res) => {
    Driver.find()
        .then((drivers) => {
            res.json(drivers)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/api/orders', (req, res) => {
    Order.find()
        .then((orders) => {
            res.json(orders)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('api/orders/:id', (req, res) => {
    Order.findById(req.params.id)
        .then(order => {
            res.json(order)
        })
        .catch(err => {
            console.log(err)
        })
})

app.post('/api/orders', (req, res) => {

    Driver.findOneAndUpdate({ available: true }, { available: false }, { new: true })// change availability of chosen driver to false TT
        .then(driver => {
            console.log(driver)
            // select driver TT
            Order.create({
                name: req.body.name,
                email: req.body.email,
                pickUpAddress: req.body.pickUpAddress,
                dropOffAddress: req.body.dropOffAddress,
                time: req.body.time,
                driver: driver._id // add driver id to new order TT
            }).then((order) => {
                res.json(order)
                console.log(one)
            })
                .catch((err) => {
                    console.log(err)
                })
        })
})

app.delete('/api/orders/:id', (req, res) => {
    Order.findOneAndRemove({ _id: req.params.id })
        .then(() => {

            console.log("deleted")

        })
        .catch(err => {
            console.log(err)
        })
})


app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'))
})