function sayHi() {
  var phrase = "Hello"; // local variable, "var" instead of "let"

  console.log(phrase); // Hello
}

sayHi();

//console.log(phrase); // ReferenceError: phrase is not defined

// var variables are either function-wide or global, they are visible through blocks.

if (true) {
  var test = true; // use "var" instead of "let"
}

console.log(test); // true

for (var i = 0; i < 10; i++) {
  // ...
}
// var cannot be block- or loop-local:
console.log(i); //10

// “var” are processed at the function start

function sayHi2() {
  phrase = "Hello";

  console.log(phrase);

  var phrase;
}

sayHi2(); // Hello

//Is technically the same as this (moved var phrase above):

function sayHi3() {
  var phrase;

  phrase = "Hello";

  console.log(phrase);
}

sayHi3();//"Hello"  

// Declarations are hoisted(raised to top), but assignments are not.

function sayHi4() {
  console.log(phrase); // undefined

  var phrase = "Hello";
}

sayHi4();//function sayHi() {
  var phrase = "Hello"; // local variable, "var" instead of "let"

  console.log(phrase); // Hello
}

sayHi();

//console.log(phrase); // ReferenceError: phrase is not defined

// var variables are either function-wide or global, they are visible through blocks.

if (true) {
  var test = true; // use "var" instead of "let"
}

console.log(test); // true

for (var i = 0; i < 10; i++) {
  // ...
}
// var cannot be block- or loop-local:
console.log(i); //10

// “var” are processed at the function start

function sayHi2() {
  phrase = "Hello";

  console.log(phrase);

  var phrase;
}

sayHi2(); // Hello

//Is technically the same as this (moved var phrase above):

function sayHi3() {
  var phrase;

  phrase = "Hello";

  console.log(phrase);
}

sayHi3();//"Hello"  

// Declarations are hoisted(raised to top), but assignments are not.

function sayHi4() {
  console.log(phrase); // undefined

  var phrase = "Hello";
}

sayHi4();//undefined