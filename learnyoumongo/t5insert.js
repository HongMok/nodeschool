
 // var mongo = require('mongodb').MongoClient

 // var firstName = process.argv[2]
 // var lastName = process.argv[3]
 // var doc = {
 //   firstName: firstName
 // , lastName: lastName
 // }

 // var url = 'mongodb://localhost:27017/mydb'
 // mongo.connect(url, function(err, db) {
 //   if (err) throw err
 //   var collection = db.collection('docs')
 //   collection.insert(doc, function(err, data) {
 //     if (err) throw err
 //     console.log(JSON.stringify(doc))
 //     db.close()
 //   })
 // })



var dbHost = 'localhost';
var dbPort = 27017;
var dbName = 'mydb';

var dbFullPath = 'mongodb://'+ dbHost +':'+ dbPort +'/' + dbName;

var mongo = require('mongodb').MongoClient;

var firstName = process.argv[2];
var lastName = process.argv[3];

mongo.connect( dbFullPath, function(err, db) {
	if(err){
		console.error(err);
	}

	var col = db.collection('docs');
	var obj = {
		firstName: firstName,
		lastName: lastName
	};
	// var json = JSON.stringify( obj );
	// col.save( obj );

	col.insert( obj, function( err, data ){
		if(err){
			throw err;
		}
		console.log( JSON.stringify( obj ) );

		db.close();
	} );

	// console.log( json );
	// db.close();


});

