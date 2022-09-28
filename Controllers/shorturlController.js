const db = require('../Models') 

module.exports = {
    create: async function(req, res){   
        console.log(req);
        try{
            let rand = Math.random().toString(16).substr(2, 8); 
            let metadata = await urlMetadata(req.body.url).then((meta)=> { 
                return meta;
            })   
            const urldata = {
                original: metadata.url, 
                new: rand, 
            }
            await db.Shorturl.create(urldata).then(obj => {
                console.log(obj);
                res.json(obj)
            })
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