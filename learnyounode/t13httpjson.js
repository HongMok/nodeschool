/**
 * Created by moxiong on 2015/8/21.
 */

var http = require('http');
var url = require('url');


http.createServer( function(req,res){
    if( req.method != 'GET'){
        return;
    }

    var parsedUrl = url.parse( req.url, true );
    var json = null;

    var pathName = parsedUrl.pathname;
    var date = new Date( parsedUrl.query.iso );

    if( pathName === '/api/parsetime' ){
        json = parseTime( date );
    }
    else if( pathName === '/api/unixtime' ){
        json = unixTime( date );
    }

    if( json ){
        res.writeHead( 200, { 'Content-Type' : 'application/json' } );
        res.end( JSON.stringify( json ) );
    }
    else{
        res.writeHead(404);
        res.end();
    }

}).listen( process.argv[2]);

function parseTime( time ){
    return {
        hour : time.getHours(),
        minute : time.getMinutes(),
        second : time.getSeconds()
    };
}

function unixTime( time ){
    return {
        unixtime : time.getTime()
    };
}
