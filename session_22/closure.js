
// scenario 1
let name1 = "John";

function sayHi() {
  console.log("Hi, " + name1);
}

name1 = "Pete";

sayHi(); // Hi, Pete

// scenario 2

function makeWorker() {
  let name = "Pete";

  return function() {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // Pete