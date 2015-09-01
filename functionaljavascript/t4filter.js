/**
 * Created by moxiong on 2015/9/1.
 */
function getShortMessages(messages) {
    if( messages === null || messages.length === 0 ){
        return;
    }

    return messages.filter( function( e ){
        return e.message.length < 50;
    } ).map( function( e ){
        return e.message;
    } );
}

module.exports = getShortMessages