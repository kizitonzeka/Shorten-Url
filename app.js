const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");
const shortenUrl = require('./public/js/post');
const shortUrl = [{url: "", inputUrl:""}];

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get("/", function(req, res){
    res.render('home', {shortUrl: shortUrl});
})

app.post('/', (req, res)=>{

    const inputUrl = req.body.userurl;
    
    shortenUrl(inputUrl).then(response=>{
        shortUrl.push({url:response.shortUrl, inputUrl: inputUrl});
        res.redirect('/');
    }).catch(()=>{
        console.log('Request failed')
    })


});

app.listen(3000, function(){
    console.log('Starting server on port 3000....');
})