### The "new Function" syntax

1. There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.
2. let func = new Function ([arg1[, arg2[, ...argN]],] functionBody). function parameters (or, more precisely, names for them) go first, and the body is last. All arguments are strings.

#### Closure

1. Usually, a function remembers where it was born in the special property [[Environment]]. It references the Lexical Environment from where it’s created.
2. But when a function is created using new Function, its [[Environment]] references not the current Lexical Environment, but instead the global one.

### Code

~~~

let sum = new Function('a','b','return a+b;');
console.log(sum(1,2)); // 3

// closure

function getFunc() {
  let value = "test";

  let func = new Function('console.log(value)');

  return func;
}

//getFunc()(); // error: value is not defined
// because [[Environment]] is refering to global lexical object

// different forms of parameters

let sum1=new Function('a,b','return a+b'); // comma separated input
console.log(sum1(1,2));//3

let sum2=new Function('a , b','return a+b');
console.log(sum2(1,2));//3


let sum3=new Function('a , b','a+b');
console.log(sum3(1,2));//undefined

let sum4=new Function('a , b','a+b','return a+b');//SyntaxError: Arg string terminates parameters early
console.log(sum4(1,2));//undefined

~~~