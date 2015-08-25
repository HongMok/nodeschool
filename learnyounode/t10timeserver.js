/**
 * Created by moxiong on 2015/8/20.
 */

var net = require('net');
var strftime = require('strftime');

//var date = new Date();
//console.log( strftime('%Y-%m-%d %H:%M', date) );


net.createServer( function(socket){
    var date = new Date();
    //socket.on('end', function(){
    //    socket.end();
    //})
    socket.write( strftime('%Y-%m-%d %H:%M', date) + '\n' );
    socket.end();
}).listen( process.argv[2] );