/**
 * Created by moxiong on 2015/8/21.
 */

var http = require('http');
var tm = require('through2-map');
var bl = require('bl');

http.createServer(function(req, res){
    if(req.method != 'POST'){
        return;
    }

    //req.pipe(bl(function(err,data){
    //    if(err){
    //        console.error(err);
    //    }
    //    else{
    //        data = data.toString();
    //        res.end(data.toUpperCase() );
    //    }
    //}));

    req.pipe(
        tm(function(chunk){
            return chunk.toString().toUpperCase();
        })
    ).pipe(res);


}).listen( process.argv[2] );
