require('dotenv').config();
const express = require('express'); 
const mongoose = require('mongoose'); 
const PORT = process.env.PORT || 5000; 
const urlMetadata = require('url-metadata')
mongoose.connect(`${process.env.MONGOURI}`, {
    useNewUrlParser: true,
  });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (request, response) => {
    response.send('Hello World')
}); 

const Schema = mongoose.Schema; 
const shorturlSchema = new Schema({
    original: {type: String}, 
    new: {type: String, unique: true}
})

const NewURL = mongoose.model('shorturl', shorturlSchema) 

app.post('/addurl', async (req, res) => {
    //req.body.url = NewURL.original 
    //need a generator to create new url 
    //need to make sure new url is unique for each document 
    //something about testing injection?
    //web scrape metadata and add to document for analytics practice   
    let resdata = [];
    let rand = Math.random().toString(16).substr(2, 8);  
    let metadata;
    urlMetadata(req.body.url).then((meta)=> {
        metadata = meta;
    }) 
    resdata.push(metadata);
    try{
        let data = await NewURL.create({
            original: req.body.url, 
            new: rand
        })   
        if(data) resdata.push(data) 
    } 
    catch(err){ 
        res.send(err);
    }
    
    res.json(resdata);
}) 


app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
}); 


//https://openbase.com/js/x-ray 
//for later
  