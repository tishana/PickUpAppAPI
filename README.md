# Pick Up App

The Pick-up app is a tool for riders to schedule a car pick-up to their local destination. The app’s automated dispatch checks a drivers' availability and pairs with a compatible pick-up request. The app shows riders that the pick-up has been booked.

## Team Members
- [Donell Ellis](https://github.com/donellellis)
- [Salman Naseer](https://github.com/salmannaseer5)
- [Tishana Trainor](https://github.com/tishana)

## Tech Used

- Mongoose
- Express
- React (front end)
- Node
- HTML (front end)
- CSS (front end)

## Our Approach

### User Stories

* I can create an Order
* I can view an Order once created, and see a Confirmation Number, a Pick Up Location, a Drop Off Location, and a Pick Up Time
* I can view an existing Order by entering my Order Id on the home page in the text field beneath the words Order Number 
* I can delete/cancel an Order by clicking the "Cancel Order" button on the Order confirmation page

### Acheiving CRUD

* C - Creating new Orders
* R - Showing a New Order once it is created OR showing an existing order once a user inputs the Order Id
* U - Updating/Modifying a Driver's availability when assigning them to an Order (when the Order is created)
* D - Canceling an order

### Front End
Please see our [front end repo](https://github.com/donellellis/PickUpApp) here for information on how it was built, technologies used, and installation instructions.


### Back End
We built a JSON API using Mongoose and  Express. This API has 2 collections, Drivers and Orders.

The back end also contains HTTP request routes which are used along with our front end React application. These routes include get, post, and delete.



## Installation Instructions

### Back End
1. Clone this repository.
2. Change to the directory containing this file.
3. Run NPM Install
4. Open your text editor
5. Run Mongod
6. IN A NEW Terminal tab and run node db/seed.js to seed your database
7. Run NPM Run Start or nodemon

```
git clone git@github.com:tishana/PickUpAppAPI.git
cd PickUpAppAPI
npm install
code .
mongod
node db/seed.js
npm run start
``` 




