
var dbHost = 'localhost';
var dbPort = 27017;
var dbName = process.argv[2];

var dbFullPath = 'mongodb://'+ dbHost +':'+ dbPort +'/' + dbName;

var mongo = require('mongodb').MongoClient;


mongo.connect( dbFullPath, function(err, db) {
	if(err){
		console.error(err);
	}

	var users = db.collection( process.argv[3] );

	users.remove({_id: process.argv[4]}, function(err, data){
		if(err){
			throw err;
		}

		db.close();
	} );


});