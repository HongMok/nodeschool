
var http = require('http');
var bl = require('bl');
var async = require('async');
var after = require('after');

//var funcList = [];
//for(var i = 2; i < process.argv.length; i++ ){
//	funcList[i-2] = function(callBack){
//		http.get( process.argv[i], function(res){
//			res.pipe(bl(function(err,data){
//				if(err){
//					console.error(err);
//				}
//				callBack(null, data.toString());
//			}))
//		} )
//	};
//}

async.parallel( [
    function(cb){
        http.get(process.argv[2], function(res){
            res.pipe(bl(function(err,data){
                cb(err, data);
            }))
        })
    },

    function(cb){
        http.get(process.argv[3], function(res){
            res.pipe(bl(function(err,data){
                cb(err, data);
            }))
        })
    },

    function(cb){
        http.get(process.argv[4], function(res){
            res.pipe(bl(function(err,data){
                cb(err, data);
            }))
        })
    }
], function(err, results){
	if(err){
		console.error(err);
	}
	else{
		for( var i = 0; i < results.length; i++ ){
			console.log( results[i].toString() );
		}
	}
});


// var index = 2;

// loop();

// function loop(){
// 	if( index < process.argv.length ){
// 		getOne( process.argv[index], loop );
// 		index++;
// 	}
// }

// function getOne( url, cb ){
// 	http.get( url, function(res){
// 		res.pipe(bl(function(err,data){
// 		if(err){
// 			console.error(err);
// 		}
// 		else{
// 			data = data.toString();
// 			console.log(data);
// 			cb();
// 		}
// 	}))
// 	} )
// }

