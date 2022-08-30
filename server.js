require('dotenv').config();
const express = require('express'); 
const mongoose = require('mongoose'); 
const PORT = process.env.PORT || 5000; 
const routes = require('./routes');
const exphbs = require("express-handlebars");
mongoose.connect(`${process.env.MONGOURI}`, {
    useNewUrlParser: true,
  });

const app = express();  
app.engine('handlebars', exphbs.engine());
app.set("view engine", "handlebars");
app.set('views', './Views');
app.get('/', (req, res) => {
    res.render('home');
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
}); 


//https://openbase.com/js/x-ray 
//for later
  