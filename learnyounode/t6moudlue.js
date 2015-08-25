/**
 * Created by moxiong on 2015/8/19.
 */

var myModule = require('./t6mymodule');

myModule( process.argv[2], process.argv[3], function(err, files){
    if(err){
        console.log(err);
    }
    else{
        files.forEach(function(file){
            console.log(file);
        })
    }
})