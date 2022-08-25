require('dotenv').config();
const express = require('express'); 
const mongoose = require('mongoose'); 
const PORT = process.env.PORT || 5000; 
const urlMetadata = require('url-metadata'); 
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect(`${process.env.MONGOURI}`, {
    useNewUrlParser: true,
  });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
}); 


//https://openbase.com/js/x-ray 
//for later
  