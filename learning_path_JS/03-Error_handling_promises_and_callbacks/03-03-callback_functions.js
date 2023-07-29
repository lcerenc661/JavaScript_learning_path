/*Callback functions ==  callback function is a function passed into another function as an argument,
 which is then invoked inside the outer function to complete some kind of routine or action */

 function print(message){
    console.log(message);
 }

 function sum(x,y,callbackFunc){
    let answ = x + y;
    callbackFunc(`answer: ${answ}`);
 }

 sum(5,3,print)

 /*Callback functions can be executed asynchronously, modifying the workflow.*/

function myCallbackFunc(){
    console.log('Async greeting')
}

/*setTimeout execute functions after an specified amount of time */
setTimeout(myCallbackFunc, 5000); //Will be executed after 5 seconds

/*setInterval execute a function each interval of time*/
let clock = ()=>{
    let date = new Date();
    console.log(`${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`)
}

setInterval(clock,5500)





