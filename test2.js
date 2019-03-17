const express = require("express");
const bodyParser = require("body-parser");
var app = express();
var hbs = require("hbs");
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.render('render.hbs');
});
app.post('/',(req,res)=>{
    console.log(req.body.name);
});

app.listen(8080);