var sys = require("sys"),
my_http = require("http"),
path = require("path"),
url = require("url"),
filesys = require("fs");

var exec = require('child_process').exec;
var whitelist = ['css', 'js', 'html'];

function stripSlashes(path) {
    var regex = /\/(.*[^\/])/;
    var matches = regex.exec(path);
    return matches[1];
}

function getExtension(path) {
    var regex = /.*\.(.*[^\/])/;
    var matches = regex.exec(path);
    return matches[1];
}

my_http.createServer(function(request, response){
	var fpath = url.parse(request.url, ['hash']);
    var file_loc = fpath.pathname;
    var full_path = path.join(process.cwd(), file_loc);
    path.exists(full_path, function(exists){
        if(!exists){
            response.writeHeader(404, {"Content-Type": "text/plain"});  
            response.write("404 Not Found\n");  
            response.end();
        }
        else{
            var ext = getExtension(file_loc);
            var hash = fpath.query.hash;
            console.log(hash);
            if (whitelist.indexOf(ext) < 0 || !hash) {
                // serve directly
                filesys.readFile(full_path, "binary", function(err, file) { 
                    if(err) {  
                        response.writeHeader(500, {"Content-Type": "text/plain"});  
                        response.write(err + "\n");  
                        response.end(); 
                    } else {
                        response.writeHeader(200);  
                        response.write(file, "binary");  
                        response.end();
                    } 
                });
            } else {
                var cmd = 'git show ' + hash + ':' + stripSlashes(file_loc);
                exec(cmd, function(error, stdout, stderr) {
                    console.log('stderr: ' + stderr);
                    if (error !== null) {
                        console.log('exec error: ' + error);
                    }
                    console.log(request.headers.accept);
                    response.setHeader("Content-Type", request.headers.accept);
                    response.write(stdout);  
                    response.end();
                });
            }
        }
    });
}).listen(8080);
sys.puts("Server Running on 8080");  