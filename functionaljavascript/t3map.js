/**
 * Created by moxiong on 2015/9/1.
 */
function doubleAll(numbers) {
    if( numbers === null || numbers.length === 0 ){
        return ;
    }
    numbers = numbers.map(function(e){
        return e * 2;
    });
    return numbers;
}

module.exports = doubleAll