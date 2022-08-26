const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const shorturlSchema = new Schema({
    original: {type: String}, 
    new: {type: String, unique: true}, 
}) 

const ShortURL = mongoose.model('shorturl', shorturlSchema); 
module.exports = ShortURL;