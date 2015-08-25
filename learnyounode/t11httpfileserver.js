/**
 * Created by moxiong on 2015/8/21.
 */

var http = require('http');
var fs = require('fs');

http.createServer( function(req, res){
    var rs = fs.createReadStream( process.argv[3] );
    rs.pipe(res);
    //rs.on('data', function(data){
    //    res.write( data );
    //});
    //rs.on('end', function(){
    //    res.end();
    //});
    //rs.on('error', function(err){
    //    console.error(err);
    //});
}).listen( process.argv[2]);