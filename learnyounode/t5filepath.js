/**
 * Created by moxiong on 2015/8/19.
 */

var fs = require('fs');
var path = require('path');

fs.readdir( process.argv[2], function(err, files){
    if(err){
        console.log(err);
    }
    else{
        //for(var i = 0; i < files.length; i++ ) {
        //    var file = files[i];
        //    if (file.split('.')[1] == process.argv[3]) {
        //        console.log(file);
        //    }
        //}

        files.forEach(function(file){
            if(path.extname(file) === '.' + process.argv[3]){
                console.log(file);
            }
        })
    }
})