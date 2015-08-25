/**
 * Created by moxiong on 2015/8/19.
 */

var fs = require('fs');
var path = require('path');

module.exports = function(p, ext, cb ){
    fs.readdir( p, function(err, files){
        if(err){
            cb(err);
        }
        else{
            //var valFiles = [];
            //files.forEach(function(file){
            //    if(path.extname(file) === '.' + ext ){
            //        valFiles.push( file )
            //    }
            //})

            files = files.filter(function(file){
                return path.extname(file) === '.' + ext;
            })

            cb(null, files);
        }
    } )
}