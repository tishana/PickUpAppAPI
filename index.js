const express = require("express")
const parser = require("body-parser")
const cors = require('cors')
const Driver = require('./models/Driver')
const Order = require('./models/Order')

// needed for environmental variables in frontend DE
require('dotenv').config();

// const orderData = require('./db/orderData.json')// see below TT

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
    // res.json(orderData) // we shouldn't use this because it will only show the data in the seed file, and not ALL Orders TT
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
    Order.create(req.body)
        // select driver (random from availabily? Or first available?) TT
        // add driver id to new order TT
        // push new order id to driver.orders TT
        // redirect to show confirmation of the one order TT
        .then((order) => {
            res.json(order)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.delete('/api/orders/:id', (req, res) => {
    Order.findOneAndRemove({ _id: req.params.id })
        .then(() => {
            console.log("deleted")
            // res.redirect('/confirm')//placeholder for cancelled orders
        })
        .catch(err => {
            console.log(err)
        })
})


app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'))
})

