/**
 * Created by moxiong on 2015/9/1.
 */
//function reduce(arr, fn, initial ) {
//    if( arr.length == 0 ){
//        return initial;
//    }
//    else{
//        initial = fn( initial, arr[0] );
//        arr.splice( 0, 1 );
//        return reduce( arr, fn, initial );
//    }
//}
//
//function reduce(arr, fn, initial) {
//    var head = arr[0]
//    var tail = arr.slice(1)
//    var last = initial;
//
//    if (tail.length > 0)
//    {
//        last = reduce(tail, fn, initial);
//    }
//    var index = arr.length; // this goes from 1 to arr length in the end of the recursion
//    return fn(last, head, index , arr);
//}

function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
        if (index > arr.length - 1)
            return value // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    })(0, initial) // IIFE. kick off recursion with initial values
}


module.exports = reduce