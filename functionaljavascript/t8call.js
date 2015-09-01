/**
 * Created by moxiong on 2015/9/1.
 */
function duckCount(  ) {
    var arr = Array.prototype.slice.call( arguments );
    return arr.filter( function( e ){
        return Object.prototype.hasOwnProperty.call( e, 'quack' );
    } ).length;

    //return Array.prototype.filter.call( arguments, function( e ){
    //    return Object.prototype.hasOwnProperty.call( e, 'quack' );
    //}).length;
    //var count = 0;
    //for( var i = 0; i < arguments.length; i++ ){
    //    //if( args[i].hasOwnProperty('quack') ){
    //    //    count++;
    //    //}
    //    if( Object.prototype.hasOwnProperty.call(arguments[i], 'quack') ){
    //        count++;
    //    }
    //}
    //return count;
}
//
//var obj =    {
//    0: 'argument0',
//    1: 'argument1', // etc
//    2: 'arg2',
//    3: 'arg3',
//    4: 'arg4',
//    length: 5
//};
//var res = Array.prototype.slice.call( obj );
//console.log( res );
//
//printArgs( 1, 2, 3, 'nosdf', 2.0, function(){} );
//function printArgs(){
//    console.log( arguments );            //  * The `arguments` variable, available in every function, is an *Object* that uacks like an *Array*:
//    console.log( arguments.length );
//}
//
//var arr = [ 1, 2, 3, 3 ];
//console.log( arr.slice( 0, 4 ) );

module.exports = duckCount