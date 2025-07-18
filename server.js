// Here is where we import modules
// We begin by loading Express
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const { connected } = require('process');

const app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected',() =>{
 console.log('Connected to MongoDB')  
}) 
// server.js




// Import the Fruit model
const Fruit = require("./models/fruit.js");



// server.js

// GET /
app.get("/", async (req, res) => {
  res.render("index.ejs");
}); 

// server.js

// GET /fruits/new
app.get("/fruits/new", (req, res) => {
  res.send("This route sends the user a form page!");
});


app.listen(3000, () => {
  console.log('Listening on port 3000');
});
