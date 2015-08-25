
var dbHost = 'localhost';
var dbPort = 27017;
var dbName = 'mydb';

var dbFullPath = 'mongodb://'+ dbHost +':'+ dbPort +'/' + dbName;

var mongo = require('mongodb').MongoClient;

var age = process.argv[2];

mongo.connect( dbFullPath, function(err, db) {
	if(err){
		console.error(err);
	}

	var users = db.collection( 'parrots' );

	users.count( {age: {$gt: age} }, function(err, count){
		if(err){
			throw err;
		}

		console.log( count );

		db.close();
	} );


});