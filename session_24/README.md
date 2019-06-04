### Function object, NFE

1. As we already know, **functions in JavaScript are values**.
2. **Every value** in JavaScript has a **type**. What type is a function? In JavaScript, **functions are objects**.
3. A good way to imagine functions is as callable “action objects”. We can not only call them, but also treat them as objects: add/remove properties, pass by reference etc.
4. There is another built-in property **“length”** that returns the **number of function parameters**.
5. A property assigned to a function like sayHi.counter = 0 does not define a local variable counter inside it. In other words, a property counter and a variable let counter are two unrelated things.
6. **We can treat a function as an object, store properties in it, but that has no effect on its execution**. **Variables are not function properties and vice versa.** These are just parallel worlds.
7. The main difference is that if the value of count lives in an outer variable, then external code is unable to access it. Only nested functions may modify it. And if it’s bound to a function, then such a thing is possible:


### Named Function Expression

1. **Named Function Expression**, or **NFE**, is a term for **Function Expressions that have a name**.
2. **"func" is function-local**. It is not taken from outside (and not visible there). The specification guarantees that it will always reference the current function. **func is an “internal function name”**.
3. The “internal name” feature described here is only available for **Function Expressions**, not to Function Declarations. For Function Declarations, there’s just no syntax possibility to add a one more “internal” name. Sometimes, when we need a reliable internal name, it’s the reason to rewrite a Function Declaration to Named Function Expression form.

### Summary

1. Functions are objects.
2. Here we covered their properties:
    * name – the function name. Usually taken from the function definition, but if there’s none, JavaScript tries to guess it from the context (e.g. an assignment).
    * length – the number of arguments in the function definition. Rest parameters are not counted.
3. If the function is declared as a Function Expression (not in the main code flow), and it carries the name, then it is called a Named Function Expression. The name can be used inside to reference itself, for recursive calls or such.
4.  functions may carry additional properties. Many well-known JavaScript libraries make great use of this feature.
5.  They create a “main” function and attach many other “helper” functions to it. For instance, the jquery library creates a function named $. The lodash library creates a function _. And then adds _.clone, _.keyBy and other properties to (see the docs when you want learn more about them). Actually, they do it to lessen their pollution of the global space, so that a single library gives only one global variable. That reduces the possibility of naming conflicts.
6.So, a function can do a useful job by itself and also carry a bunch of other functionality in properties.

### Code

~~~
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

//*************************************************
//TASK 1

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;
    counter.decrease = () => count--;

    return counter;

}


let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // set the new count

console.log(counter()); // 10

counter.decrease(); // decrease the count by 1

console.log(counter()); // 10 (instead of 11) 

// **********************************************************************

// Task 2

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

function sum(a) {
    let recursiveSum = a;

    function f(b) {
        recursiveSum += b;
        return f;
    }

    f.toString = function () {
        return recursiveSum;
    };
    return f;
}

let x = sum(1)(2);

console.log(x.toString());

// console.log(sum(1)(2)(3));
// console.log(sum(5)(-1)(2));
~~~