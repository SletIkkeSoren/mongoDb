const express = require('express');
const app = express();

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://AdminBuraking:NightHold2100@cluster0-shard-00-00-e4eax.mongodb.net:27017,cluster0-shard-00-01-e4eax.mongodb.net:27017,cluster0-shard-00-02-e4eax.mongodb.net:27017/zalandodummy?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
app.get('/customers', function(err, res){

    MongoClient.connect(uri, function(err, db) 
    {
        /*if(err)
            {
                console.log(err);
            }
        else
            {
                console.log('Connected to db ' + db.databaseName);
            }*/
        var col = db.collection('customers');
    
        //CRUD INC
        col.find().toArray(function(err, result){
            res.json(result);
        });
        db.close();
    });
});
app.listen(3000);