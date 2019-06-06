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
