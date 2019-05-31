
### Old Var

1. var variables are either function-wide or global, they are visible through blocks.
2. If a code block is inside a function, then var becomes a function-level variable.
3. var declarations are processed when the function starts (or script starts for globals).
4. In other words, var variables are defined from the beginning of the function, no matter where the definition is (assuming that the definition is not in the nested function).
5. Declarations are hoisted(raised o top), but assignments are not. for global, declaration of with var varibles available from first line and in case of function also same will happen.
6. The declaration is processed at the start of function execution (“hoisted”), but the assignment always works at the place where it appears.
7. Because all var declarations are processed at the function start, we can reference them at any place. But variables are undefined until the assignments.

### Summary
1. There are two main differences of var:
    * Variables have no block scope, they are visible minimum at the function level.
    * Variable declarations are processed at function start.
    * There’s one more minor difference related to the global object, we’ll cover that in the next chapter.
2. These differences are actually a bad thing most of the time. Block-level variables is such a great thing. That’s why let was introduced in the standard long ago, and is now a major way (along with const) to declare a variable.

### Code
~~~

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

~~~