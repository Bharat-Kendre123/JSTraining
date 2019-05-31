
### Closure

1. JavaScript is a very function-oriented language. 

#### Lexical Environment

1. In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.
2. The Lexical Environment object consists of two parts:
    * Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).
    * A reference to the outer lexical environment, the one associated with the outer code.
3. A closure is a function that remembers its outer variables and can access them. In some languages, that’s not possible, or a function should be written in a special way to make it happen. But as explained above, in JavaScript, all functions are naturally closures (there is only one exclusion, to be covered in The "new Function" syntax).
4. That is: they automatically remember where they were created using a hidden [[Environment]] property, and all of them can access outer variables.
5. The examples above concentrated on functions. But a Lexical Environment exists for any code block {...}.

### Code

~~~

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


function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // 0
console.log( counter2() ); // 1

//*******************************************************************************

/* .. your code for inBetween and inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

//array.filter(f)===> f is function

function inBetween(x,y){
    return function(z){
        if(z<=x && z<=y){
            return true;
        }else{
            return false;
        }
    }
}

let arr=[1,2,3,4,5,6];

console.log(arr.filter(inBetween(2,6))); // [ 1, 2 ]



function inArray(t){
    return function(x){
        return t.includes(x);
    }
}

console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr.filter(inArray([2,5,6]))); // [ 2, 5, 6 ]

function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1


// ************************************************************

let phrase = "Hello";

if (true) {
    let user = "John";
    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi(); // Hello, John


// ***************************************************************


function sum(a) {
    return function sum2(b) {
        return a + b;
    }
}

console.log(sum(2)(3)); // 5

// *********************************************************************

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

console.log(users.sort(byField("name")));

function byField(field){
    return (a,b)=>a[field]>b[field]?1:-1;
}

// [ { name: 'Ann', age: 19, surname: 'Hathaway' },
//   { name: 'John', age: 20, surname: 'Johnson' },
//   { name: 'Pete', age: 18, surname: 'Peterson' } ]

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
       let x=i;
    let shooter = function() { // shooter function
       
      console.log( x ); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...

~~~
