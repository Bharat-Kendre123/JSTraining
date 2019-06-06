function sayHi(){
    console.log("Hi Bharat");
}
console.log(sayHi.name);// sayHi

function f(sayHi = function() {}) {
  console.log(sayHi.name);// sayHi
}

f();

// Object methods have names too
let user = {

  sayHi() {
    // ...
  },

  sayBye: function() {
    // ...
  }

}

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye

let arr=[function(){}];
console.log("HI"+arr[0].name); // empty name

// The “length” property
function f1(){};
function f2(a,d){};
console.log(f1.length);//0
console.log(f2.length);//2

// lenght property can not count rest parameter
function f3(a,...b){};
console.log(f3.length); // 1

// we can add properties to function objects

function counters(){
    counters.count++;
}
counters.count=0;
console.log(counters()); // undefined
counters();
console.log(counters.count); // 2

// *****************************************************

function makeCounter() {
  // instead of:
  // let count = 0

  function counter() {
    return counter.count++; // counter++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
console.log( counter() ); // 0
console.log( counter() ); // 1
let counter2=makeCounter();
console.log( counter2() ); // 0
console.log( counter2() ); // 1

// ***********************************************************

// let tempFunc=function(){
//     console.log("Hi");
    
//     tempFunc.counter++;
//     tempFunc();
// }
// tempFunc.counetr=0;
// tempFunc();
// console.log(tempFunc.counet);

// **************************************************************

//Named Function Expression

let sayHi1 = function func(who) {
  if(who){
  console.log(`Hello, ${who}`);
  }else{
    func("Guest");
  } 
};

sayHi1(); //Hello, Guest
//func(); // ReferenceError: func is not defined
let welcome=sayHi1;
console.log(welcome.name);//func
welcome(); //Hello, Guest


let sayHi2 = function func(who) {
  if(who){
  console.log(`Hello, ${who}`);
  }else{
    sayHi2("Guest");
  } 
};

let temp=sayHi2;
sayHi2=null; // if sayHI2 has function value then we wont get any error
//temp(); // TypeError: sayHi2 is not a function
// There are two special things about the name func:

// 1. It allows the function to reference itself internally.
// 2. It is not visible outside of the function.

// The problem with that code is that the value of sayHi may change. 
//The function may go to another variable, and the code will start to give errors:
