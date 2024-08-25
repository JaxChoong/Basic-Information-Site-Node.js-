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
    }else if (path == "/about"){
        fs.readFile('about.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end()
        })
    }else if (path == "/contact-me"){
        fs.readFile('contact-me.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end()
        })
    }else{
        fs.readFile('404.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end()
        })
    }
}).listen(8080)