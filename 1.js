// console.log('starting 1.js');
//  const f2=require("./2.js");
// const hbs = require("./hbs.js");
// var text=hbs.text;
// console.log(text);
var text="good day";
var toneParams = {
  tone_input: { 'text': text },
  content_type: 'application/json',
  sentences:false,
};

module.exports.toneParams=toneParams;