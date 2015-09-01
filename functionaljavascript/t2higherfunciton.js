/**
 * Created by moxiong on 2015/9/1.
 */
function repeat(operation, num) {
    // SOLUTION GOES HERE
    while(num--){
        operation();
    }
}

// Do not remove the line below
module.exports = repeat