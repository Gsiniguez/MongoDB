var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

// Connection URL
const url = 'mongodb://172.16.2.209:27017';

// Connect to the db

MongoClient.connect(url, function (err, client) {
    if (err) {
        console.log('Unable to connect to the Server', err);
    } else {
        // We are connected
        console.log('Connection established to', url);

        // Get the documents collection
        const db = client.db('Documentales');
        var collection = db.collection('Persona');

        //collection.insertOne({nombre:'Seba',apellido:'Piluqui'});
        collection.updateOne({nombre:'Seba'},{nombre:'Facu'});

    }
});