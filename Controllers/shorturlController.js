const db = require('../Models') 

module.exports = {
    create: async function(req, res){  
        try{
            let rand = Math.random().toString(16).substr(2, 8); 
            const urldata = {
                original: req.body.metadata.url, 
                new: rand, 
                metadata: req.body.metadata
            }
            await db.Shorturl.create(urldata).then(obj => res.json(obj))
        } 
        catch(err){
            res.send(err);
        }
    }, 
    retrieve: async function(req, res) { 
        try{
            await db.Shorturl.findOne({new: req.params.id}).then(saved => res.status(301).rediret(saved.original));  
        } 
        catch(err){
            res.send(err);
        }
    }
}