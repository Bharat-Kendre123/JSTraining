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