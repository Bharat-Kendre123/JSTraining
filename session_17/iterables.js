// iterate string
for (let value of "Bharat") {
    console.log(value);   // B h a r a t
}

// implementation of iterator

let range = {
    from: 1,
    to: 10,
};

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ }
            } else {
                return { done: true }
            }
        }
    }
}

for (let value of range) {
    console.log(value); // 1 2 3 4 5 6 7 8 9 10
}

// if we comment range[Symbol.iterator] -- error will be   TypeError: range is not iterable

// we will try with the constructor -- tried not working

// we will merge range as part og object

let newRange = {
    from: 1,
    to: 5,

    [Symbol.iterator]: function () {
        this.current = this.from;
        this.last = this.to;
        return this;
    },

    next() {
        if (this.current <= this.last) {
            return { done: false, value: this.current++ }
        } else {
            return { done: true }
        }
    }
}

for (let range of newRange) {
    console.log(range);    // 1 2 3 4 5
}

// using iterator object

let iterator=newRange[Symbol.iterator]();

while(true){
    let next=iterator.next();
    if(!next.done){
        console.log(next.value);  // 1 2 3 4 5
    }else{
        break;
    }
}

// 
let arrayLike = { // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2
};

//Array.from for array-likes
let arr = Array.from(arrayLike);
console.log(arr); // [ "Hello", "World"]

for(let value of arr){
console.log(value);   // Hello  World
}

console.log(arr.push("I am 3rd")); // 3
console.log(arr); // [ 'Hello', 'World', 'I am 3rd' ]

arr["key"]="I am not Index";

for(let value of arr){
console.log(value);   // 'Hello' 'World' 'I am 3rd' 
}
console.log(arr); // [ 'Hello', 'World', 'I am 3rd', key: 'I am not Index' ]

//Array.from for iterable

let arrFromIterable=Array.from(newRange);
console.log(arrFromIterable); // [ 1, 2, 3, 4, 5 ]
console.log(arrFromIterable.length);// 5

// Array.from(obj[, mapFn, thisArg])
let tempArray=Array.from(newRange,num=>num+1);
console.log(tempArray); // [ 2, 3, 4, 5, 6 ]

