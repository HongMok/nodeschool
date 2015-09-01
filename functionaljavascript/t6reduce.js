/**
 * Created by moxiong on 2015/9/1.
 */
function countWords(inputWords) {
    //var obj = {};
    //inputWords.reduce( function( pre, curr ){
    //    if( obj[curr] == null ){
    //        obj[curr] = 1;
    //    }
    //    else{
    //        obj[curr] = Number( obj[curr] ) + 1;
    //    }
    //    return curr;
    //}, 0 );
    //return obj;

    return inputWords.reduce( function( countMap, word ){
        countMap[ word ] = countMap[ word ] == null ? 1 : countMap[ word ] + 1;
        return countMap;
    }, {});
}

module.exports = countWords