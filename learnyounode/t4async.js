
var fs = require('fs');

fs.readFile( process.argv[2], function(err, data){
//fs.readFile( process.argv[2], 'utf-8', callBack )
	if(err){
		console.log(err);
	}
	else{
		console.log( data.toString().split('\n').length - 1 );
	}
} );