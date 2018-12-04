const express = require("express")
const parser = require("body-parser")
const cors = require('cors')
const Driver = require('./models/Driver')
const Order = require('./models/Order')
// const orderData = require('./db/orderData.json')// see below TT

const app = express()


app.use(parser.urlencoded({ extended: true }))

app.use(parser.json())
app.use(cors())



app.get('/api/orders', (req, res) => {
  res.json(orderData)
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
        .then((order) => {
            res.json(order)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.delete('/api/orders/delete/:id', (req, res) => {
    Order.findOneAndRemove({ _id: req.params.id })
        .then(() => {
            res.redirect('/confirm')//placeholder for cancelled orders
        })
        .catch(err => {
            console.log(err)
        })
})


app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), () => {
  console.log('Server listening on port 8000' + app.get('port'))
})
