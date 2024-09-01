var fs = require('fs');
var express = require("express");
var app = express()
const path = require("node:path")

//set view engine to use ejs
app.set('views', path.join(__dirname,"views"))
app.set('view engine', "ejs")

//set assets path
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

const PORT = 3000;

app.get("/",(req,res)=>{
    res.render("index")
})

app.get('/about',(req,res)=>{
    res.render("about")
})

app.get("/contact-me",(req,res)=>{
    res.render("contact-me")
})

app.get("*",(req,res)=>{
    res.render("404")
})
app.listen(PORT,()=> console.log(`Basic Information Site Running on port ${PORT}`))