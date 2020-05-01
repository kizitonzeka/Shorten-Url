const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get("/", function(req, res){
    res.send("Server is working..");
})

app.listen(3000, function(){
    console.log('Starting server on port 3000....');
})