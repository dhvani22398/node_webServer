// console.log('starting 3.js');
var threshold;
// var text="sadness";
// var countThreshold;
var countThreshold=(text)=>{
    // var threshold;
   switch(text){
       case "joy":
           threshold = 1;
           break;
        case "sadness":
            threshold = 2;
            break;
        case "anger":
            threshold=3;
            break;
        case "fear":
            threshold=4;
            break;
        case "analytical":
            threshold=5;
            break;
        case "confident":
            threshold=6;
            break;
        case "tentative":
            threshold=7;
            break;
   }
    console.log(`emotion : ${text}`);
    console.log(`threshold : ${threshold}`);
    
};

module.exports={countThreshold};