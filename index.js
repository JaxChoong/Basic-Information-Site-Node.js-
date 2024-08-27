var fs = require('fs');
var express = require("express");
var app = express()

const PORT = 3000;

app.get("/",(req,res)=>{
    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end()
    })
})

app.get('/about',(req,res)=>{
    fs.readFile('about.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end()
    })
})

app.get("/contact-me",(req,res)=>{
    fs.readFile('contact-me.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end()
    })
})

app.get("*",(req,res)=>{
    fs.readFile('404.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end()
    })
})
app.listen(PORT,()=> console.log(`Basic Information Site Running on port ${PORT}`))