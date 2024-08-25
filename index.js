var url = require("url");
var fs = require('fs');
var http = require("http")

http.createServer(function(req,res){
    var path = url.parse(req.url,true).pathname
    if (path == "/"){
        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end()
        })
    }
}).listen(8080)