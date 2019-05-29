
### Iterables

1. Iterable objects is a generalization of arrays. That’s a concept that allows to make any object useable in a **for..of** loop.
2.  **Arrays are iterable**. But there are many other built-in objects, that are iterable as well. For instance, **Strings are iterable** also. As we’ll see, many built-in operators and methods rely on them.

#### Symbol.iterator

1. **Steps to make object iterable**
    * When **for..of** starts, it **calls** that method once (**or errors if not found**). The method must return an **iterator** – **an object with the method next**.
    * Onward, **for..of** works only with that returned object.
    * When **for..of** wants the **next value**, it **calls next()** on that object.
    * The result of **next()** must have the form **{done: Boolean, value: any},** where **done=true** means that the **iteration is finished**, otherwise value must be the **new value.**
2. The downside is that now **it’s impossible to have two for..of loops running over the object simultaneously:** they’ll share the iteration state, because there’s **only one iterator** – the object itself. But two parallel for-ofs is a rare thing, even in async scenarios.

#### Iterables and array-likes

1. **Iterables** are objects that implement the **Symbol.iterator** method.
2. **Array-likes** are objects that have **indexes** and **length**, so they **look like arrays**.
3. strings are both **iterable (for..of works on them)** and **array-like (they have numeric indexes and length)**.
4. But an **iterable** may be **not array-like**. And vice versa an **array-like may be not iterable**.

#### Array.from

1. There’s a universal method **Array.from** that takes an **iterable or array-like value** and makes a **“real” Array** from it. Then we can call array methods on it.
2.  **Array.from(obj[, mapFn, thisArg]) -** The optional second argument **mapFn** can be a function that will be **applied to each element before adding to the array**, and **thisArg allows to set this for it.**

### Summary

1. Objects that can be used in **for..of** are called **iterable**.
2. Technically, **iterables** must implement the method named **Symbol.iterator**.
3. The result of **obj[Symbol.iterator]** is called an **iterator**. It handles the further iteration process.
4. An iterator must have the method named **next()** that returns an object **{done: Boolean, value: any}, here done:true denotes the iteration end**, otherwise the value is the next value.
5. The **Symbol.iterator** method is called automatically by **for..of**, but we also can do it directly.
6. Built-in **iterables** like **strings or arrays**, also implement **Symbol.iterator**.
7. **String iterator** knows about **surrogate pairs**.
8. Objects that have indexed properties and length are called **array-like**. Such objects may also have other properties and methods, but lack the built-in methods of arrays.
9. If we look inside the specification – we’ll see that most built-in methods assume that they work with iterables or array-likes instead of “real” arrays, because that’s more abstract.
10. **Array.from(obj[, mapFn, thisArg])** makes a real Array of an **iterable or array-like obj**, and we can then use array methods on it. The optional arguments **mapFn** and thisArg allow us to apply a function to each item.

### Code

~~~
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

~~~