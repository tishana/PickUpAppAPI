# Pick Up App

The Pick-up app is a tool for riders to schedule a car pick-up to their local destination. The app’s automated dispatch checks a drivers' availability and pairs with a compatible pick-up request. The app shows riders that the pick-up has been booked.

## Team Members
- Donell Ellis
- Salman Naseer
- Tishana Trainor

## Tech Used

- Mongoose
- Express
- React
- Node
- HTML
- CSS

## Our Approach

### User Stories

* I can create an Order
* I can view my Order once created, and see:
⋅⋅1. My Confirmation Number
⋅⋅2. My Pick Up Location
⋅⋅3. My Drop Off Location
⋅⋅4. My Pick Up Time
* I can view an existing Order by entering my Order Id on the home page in the text field beneath the words Order Number 
* I can delete/cancel an Order by clicking "Cancel Order" on the Order confirmation page

### Acheiving CRUD

* C - Creating new Orders
* R - Showing a New Order once it is created OR showing an existing order once a user inputs the Order Id
* U - Updating/Modifying a Driver's availability when assigning them to an Order (when the Order is created) OR Updating/Modifying a Driver's availability when an Order is canceled
* D - Canceling an order

### Front End



### Back End



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

### Front End

You can find the front end of this app [here](https://github.com/donellellis/PickUpApp) .
 


