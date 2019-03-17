// console.log('starting 2.js');
const f1=require("./1.js");
const f3 = require("./3.js");
// const hbs1 = require("./hbs.js");

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var _ = require("lodash");
var toneAnalyzer = new ToneAnalyzerV3({
  version_date: '2017-09-21',
  iam_apikey: '0-d1jIUkds2pViHbl770EjA_pG8y9wSrBH5wBPlLc6b-',
  url: 'https://gateway-lon.watsonplatform.net/tone-analyzer/api'
});
var toneParams=f1.toneParams;
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

// console.log(data);