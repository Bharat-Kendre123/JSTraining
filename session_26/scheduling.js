// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

function sayHi(){
    console.log("Hi Bharat!");
}

setTimeout(sayHi,100); // Hi Bharat!

//**************************************** */

let timerId=setTimeout(function() {
    console.log("Hi Bharat",new Date());
}, 1000);  // Hi Bharat

console.log(timerId);
clearTimeout(timerId); // not called fun

//*******************************************

setTimeout(function(a) {
    console.log(`I am ${a}`)
}, 1000,'Bharat'); // I am Bharat

//**********************************************

setTimeout(function() {
    return "Hi"
}, 1000);

//****************************************************

let tempScheduleId=setInterval(()=>{
console.log("Im am Set Interval");
},1000)

let tempScheduleId2=setTimeout(function() {
    console.log("Clearing Interval");
    clearInterval(tempScheduleId);
}, 5000);

// m am Set Interval
// Im am Set Interval
// Im am Set Interval
// Im am Set Interval
// Clearing Interval


//************************************************************** */

// Recursive setTimeout

let timerId3 = setTimeout(function tick() {
  console.log('tick');
  timerId3 = setTimeout(tick, 2000); // (*)
}, 2000);

setTimeout(function() {
    clearTimeout(timerId3);
}, 12000);


//*****************************************************

setTimeout(…,0)

    setTimeout(function() {
        console.log("I have delay of 0 sec")
    }, 0);

    console.log("Below settimeout"); // calls before stTimeout

    setTimeout(function() {
     console.log("I have delay of 2 sec")   
    }, 2000);