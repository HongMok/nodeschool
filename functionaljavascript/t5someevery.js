/**
 * Created by moxiong on 2015/9/1.
 */
function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every( function( e ){
            return goodUsers.some( function( ge ){
                return e.id === ge.id;
            } );
        } );
    };
}

//var func = checkUsersValid([{id:1}, {id:2}]);
//console.log( func( [{id:1}] ) );

module.exports = checkUsersValid