### Scheduling: setTimeout and setInterval

1. We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.
2. There are two methods for it:
    * setTimeout allows to run a function once after the interval of time.
    * setInterval allows to run a function regularly with the interval between the runs.
3. These methods are not a part of JavaScript specification. But most environments have the internal scheduler and provide these methods. In particular, they are supported in all browsers and Node.js.
4. A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.   
5. There are two ways of running something regularly. One is setInterval. The other one is a recursive setTimeout.
6. The recursive setTimeout is a more flexible method than setInterval. This way the next call may be scheduled differently, depending on the results of the current one.
7. It is possible that func's execution turns out to be longer than we expected and takes more than 100ms. In this case the engine waits for func to complete, then checks the scheduler and if the time is up, runs it again immediately. In the edge case, if the function always executes longer than delay ms, then the calls will happen without a pause at all.
8. There’s a special use case: setTimeout(func, 0), or just setTimeout(func). This schedules the execution of func as soon as possible. But scheduler will invoke it only after the current code is complete.     So the function is scheduled to run “right after” the current code. In other words, asynchronously.

### Summary

1. Methods setInterval(func, delay, ...args) and setTimeout(func, delay, ...args) allow to run the func regularly/once after delay milliseconds.
2. To cancel the execution, we should call clearInterval/clearTimeout with the value returned by setInterval/setTimeout.
3. Nested setTimeout calls is a more flexible alternative to setInterval. Also they can guarantee the minimal time between the executions.
4. Zero-timeout scheduling setTimeout(func, 0) (the same as setTimeout(func)) is used to schedule the call “as soon as possible, but after the current code is complete”.
5. Some use cases of setTimeout(func):
    * To split CPU-hungry tasks into pieces, so that the script doesn’t “hang”
    * To let the browser do something else while the process is going on (paint the progress bar).
6. Please note that all scheduling methods do not guarantee the exact delay. We should not rely on that in the scheduled code.
7. For example, the in-browser timer may slow down for a lot of reasons:
    * The CPU is overloaded.
    * The browser tab is in the background mode.
    * The laptop is on battery.
8. All that may increase the minimal timer resolution (the minimal delay) to 300ms or even 1000ms depending on the browser and settings.
9. Any setTimeout will run only after the current code has finished.

### Code

~~~
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
    
    //***************************************************
    
    // Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// 1.  Using setInterval.
// 2. Using recursive setTimeout.

// solution by using recursive setTimeout.

function primeNumber(from, to) {
    console.log(from);
    if (from < to) {
        setTimeout(function () {
            primeNumber(++from, to);
        }, 1000);
    }
}

//setTimeout(primeNumber, 1000,1,20);

// solution by using  setInterval

function primeNumer(from, to) {
    let current = from;

    let timetId = setInterval(() => {
        console.log(current)
        if (current >= to) {
            clearInterval(timerId);
        }
    }, 1000)
}

primeNumber(11,15);
//**********************************************************

let i = 0;

console.log(" 1 call");
setTimeout(() => console.log(i), 10); // ?
console.log(" 2 call");
// assume that the time to execute this function is >100ms
// for(let j = 0; j < 10000000000; j++) {
//   i++;
// }

~~
