
var dbHost = 'localhost';
var dbPort = 27017;
var dbName = 'learnyoumongo';

var dbFullPath = 'mongodb://'+ dbHost +':'+ dbPort +'/' + dbName;

var mongo = require('mongodb').MongoClient;

mongo.connect( dbFullPath, function(err, db) {

	var col = db.collection('parrots');
	col.find( {'age': {$gt: parseInt(process.argv[2]) }} ).toArray(function(err, doc){
		if(err){
			console.error(err);
		}
		else{
			console.log(doc);
		}

		db.close();
	});

});

