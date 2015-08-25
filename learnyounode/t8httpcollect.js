
var http = require('http');
var bl = require('bl');

http.get( process.argv[2], function(res){
	res.setEncoding('utf-8');

	res.pipe(bl(function(err,data){
		if(err){
			console.error(err);
		}
		else{
			data = data.toString();
			console.log( data.length )
			console.log(data);
		}
	}))
})