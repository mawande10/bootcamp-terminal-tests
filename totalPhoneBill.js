module.exports = function(calls){
  var call = [];
  var sms = [];
  var x = calls.split(", ");
  //console.log(x);

   for(var j=0; j< x.length; j++){
     if(x[j].startsWith("sms")){
       sms.push(x[j]);
      }
     else{
         call.push(x[j]);
         }
    } 
  var addCost=sms.length*0.65 + call.length*2.75 +0;
  var totalR="R"+addCost.toFixed(2);
return totalR;
}