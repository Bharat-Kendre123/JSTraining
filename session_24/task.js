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
