const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
var _ = require("lodash");
const f1=require("./1.js");
const f3 = require("./3.js");
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
// const f1 = require("./1.js");
var app = express();
var toneAnalyzer = new ToneAnalyzerV3({
  version_date: '2017-09-21',
  iam_apikey: '0-d1jIUkds2pViHbl770EjA_pG8y9wSrBH5wBPlLc6b-',
  url: 'https://gateway-lon.watsonplatform.net/tone-analyzer/api'
});
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('render.hbs');
});

var toneParams;
app.post('/',(req,res)=>{
   var text = req.body.textGot;
//   res.render('render.hbs');
    toneParams = {
  tone_input: { 'text': text },
  content_type: 'application/json',
  sentences:false,
};
toneAnalyzer.tone(toneParams, function (error,toneAnalysis) {
  if (error) {
    return error;
  } else { 
    // console.log(JSON.stringify(toneAnalysis,undefined,2));
    var x= _.get(toneAnalysis,'document_tone.tones[0].tone_id');
    if(x==undefined){
        console.log('emotion : neutral');
        console.log('threshold : 0');}
    else
    f3.countThreshold(x);
    // return JSON.stringify(toneAnalysis);
    }
});
});


app.listen(8080);