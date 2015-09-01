/**
 * Created by moxiong on 2015/9/1.
 */
var slice = Array.prototype.slice

function logger(namespace) {
    //return function(){
    //    var argsArr = slice.call( arguments );
    //    var msg = '';
    //    msg += namespace;
    //    argsArr.forEach( function( e ){
    //        msg += ( ' ' + e );
    //    } );
    //    console.log( msg );
    //};

    return function(){
        console.log.apply( console, [ namespace ].concat( slice.call( arguments ) ) );
    };
}

//var warn = logger('WARN:')
//warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info

module.exports = logger