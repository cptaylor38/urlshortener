const db = require('../Models') 

module.exports = {
    //analytics functions once I figure out what I'm analyzing 
    retrieve: async function(req, res){
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