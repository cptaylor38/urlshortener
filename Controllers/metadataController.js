const urlMetadata = require('url-metadata'); 

module.exports = {
    //analytics functions once I figure out what I'm analyzing 
    retrieve: async function(req, res){ 
        console.log(req.body.url);
        try{
            let metadata = await urlMetadata(req.body.url).then((meta)=> { 
                return meta;
            })   
            res.send(metadata);
        } 
        catch(err){
            res.send(err);
        }
    }
}