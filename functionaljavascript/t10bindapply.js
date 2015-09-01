/**
 * Created by moxiong on 2015/9/1.
 */
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function logger (namespace) {
    //return function(){
    //    console.log.apply( console, [ namespace ].concat( slice( arguments ) ) );
    //};

    return console.log.bind( console, namespace );
};

//var warn = logger('WARN:')
//warn('this is a warning message', 'with more info')

module.exports = logger

