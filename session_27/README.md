### Decorators and forwarding, call/apply

#### Using “func.call” for the context

1. There’s a special built-in function method func.call(context, …args) that allows to call a function explicitly setting this. func.call(context, arg1, arg2, ...)

#### Going multi-argument with “func.apply”

1. If we look more closely, there’s a minor difference between such uses of call and apply.
    * The spread operator ... allows to pass iterable args as the list to call.
    * The apply accepts only array-like args.
2. So, these calls complement each other. Where we expect an iterable, call works, where we expect an array-like, apply works.
3. And if args is both iterable and array-like, like a real array, then we technically could use any of them, but apply will probably be faster, because it’s a single operation. Most JavaScript engines internally optimize it better than a pair call + spread.
4. One of the most important uses of apply is passing the call to another function, like this.

#### Borrowing a method

1. [].join.call(arguments) 

### Summary

1. Decorator is a wrapper around a function that alters its behavior. The main job is still carried out by the function.
2. It is generally safe to replace a function or a method with a decorated one, except for one little thing. If the original function had properties on it, like func.calledCount or whatever, then the decorated one will not provide them. Because that is a wrapper. So one needs to be careful if one uses them. Some decorators provide their own properties.
3. Decorators can be seen as “features” or “aspects” that can be added to a function. We can add one or add many. And all this without changing its code!
4. To implement cachingDecorator, we studied methods:
    * func.call(context, arg1, arg2…) – calls func with given context and arguments.
    * func.apply(context, args) – calls func passing context as this and array-like args into a list of arguments.
5. The generic call forwarding is usually done with apply:
    * let wrapper = function() {
        return original.apply(this, arguments);
    }
6. We also saw an example of method borrowing when we take a method from an object and call it in the context of another object. It is quite common to take array methods and apply them to arguments. The alternative is to use rest parameters object that is a real array.

** Throttle decorator task left. Do you while revisiting this topic

### Code

~~~
function slow(x) {
console.log("Slow function called");
    x *= x;
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) { // if the result is in the map
            return cache.get(x); // return it
        }

        let result = func(x); // otherwise call func

        cache.set(x, result); // and cache (remember) the result
        return result;
    };
}

slow = cachingDecorator(slow);

console.log(slow(1)); // slow(1) is cached
console.log("Again: " + slow(1)); // the same

//************************************************************************************** */

let worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.apply(this, arguments); // (**)
//let result = func.call(this, arguments[0],arguments[1]); // (**)

    cache.set(key, result);
    return result;
  };    
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(3, 5) ); // works
console.log( "Again " + worker.slow(3, 5) ); // same (cached)

// Called with 3,5
// 8
// Again 8

// **********************************************************************************
//One of the most important uses of apply is passing the call to another function, like this:
let wrapper = function() {
  return anotherFunction.apply(this, arguments);
};

// That’s called call forwarding    

//*******************************************************************************************

// we'll make worker.slow caching
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // actually, there can be a scary CPU-heavy task here
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};
console.log("slow" in worker)
// same code as before
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    //let result = func.call(x); // (**) // TypeError: this.someMethod is not a function
    let result = func.call(this,x); // (**)
    cache.set(x, result);
    return result;
  };
}

 console.log( worker.slow(1) ); // the original method works

 worker.slow = cachingDecorator(worker.slow); // now make it caching
 console.log(worker.slow.toString());
// function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func(x); // (**)
//     cache.set(x, result);
//     return result;
//   }

console.log(worker.slow(1)); 

// So, the wrapper passes the call to the original method, but without the context this. Hence the error.

// Let’s fix it.
//*********************************************************************************************

// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

// Every call is saved as an array of arguments.

// For instance:






// function work(a, b) {
//   alert( a + b ); // work is an arbitrary function or method
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }
// P.S. That decorator is sometimes useful for unit-testing. Its advanced form is sinon.spy in Sinon.JS library.

//******************************************************** */
//SOLUTION

function work(a, b) {
    return a + b; // work is an arbitrary function or method
}

function spy(func) {

    function wrapper(...arg) {
        wrapper.calls.push(arg);
        return func.apply(this, arguments)
    }

    wrapper.calls = [];
    return wrapper;
}

work=spy(work);
console.log(work(1,2));
console.log(work.calls);
for(let arg of work.calls){
    console.log(`calls: ${arg.join(',')}`);
}

// 3
// [ [ 1, 2 ] ]
// calls: 1,2

//************************************************************************ */

//Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

function display(x){
    console.log(`I am ${x}`);
}

function delay(func,timeout){

  return  function wrapper(x){
        setTimeout(func, timeout,x);
    }
}

display=delay(display,1000);
display('Bharat'); // I am Bharat


//********************************************************************************* */
let f = debounce(sayHi, 1000);

f(1); // runs immediately
f(2); // ignored

setTimeout(() => f(3), 100); // ignored ( only 100 ms passed )
setTimeout(() => f(4), 1100); // runs
setTimeout(() => f(5), 1500); // ignored (less than 1000 ms from the last run)


function debounce(func, ms) {

    let callThefunction=true;
    return function () {
        if(callThefunction){
           callThefunction=false;
           func();
           setTimeout(()=>callThefunction=true, ms);
        }else{
            console.log(`call ignored`);
            return;
        }
    }
}


function sayHi() {
    console.log("Hi there");
}