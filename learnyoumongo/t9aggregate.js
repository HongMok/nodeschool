
var dbHost = 'localhost';
var dbPort = 27017;
var dbName = 'learnyoumongo';

var dbFullPath = 'mongodb://'+ dbHost +':'+ dbPort +'/' + dbName;

var mongo = require('mongodb').MongoClient;

var size = process.argv[2];

mongo.connect( dbFullPath, function(err, db) {
	if(err){
		throw err;
	}

	var prices = db.collection( 'prices' );

	prices.aggregate([
		{$match: {size: size}},
		// {$group: {_id: {'size': '$size'}, sumPrice: {$sum: '$price'} } },
		{$group: {_id: 'total', avgPrice:{$avg: '$price'}  }}
		]).toArray(function(err, res){
			if(err){
				throw err;
			}
			console.log( res[0].avgPrice.toFixed(2) );
			db.close();
		});


});