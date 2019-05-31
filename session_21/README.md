
### Rest parameters and spread operator

1. Many JavaScript built-in functions support an arbitrary number of arguments. **Math.max(arg1, arg2, ..., argN)** – returns the greatest of the arguments. **Object.assign(dest, src1, ..., srcN)** – copies properties from src1..N into dest. **(wont work for aray).**

#### Rest parameters ...

1. A function can be called with any number of arguments, no matter how it is defined. **There will be no error because of “excessive” arguments**. But of course in the result only the mentioned arguments will be counted.
2. The rest parameters can be mentioned in a function definition with three dots **...**. They literally mean **“gather the remaining parameters into an array”.**
3. We can choose to get the first parameters as variables, and gather only the rest. like **fun(a,...rest).**
4. **The rest parameters must be at the end.**

#### The “arguments” variable

1. There is also a special **array-like object** named **arguments** that contains all arguments by their index.
2. downside is that although arguments is both **array-like and iterable**, it’s **not an array**. It does not support array methods, so we can’t call arguments.map(...) for example.
3. **Arrow functions** do not have "arguments". If we access the arguments object from an arrow function, it takes them from the outer “normal” function.
4. As we remember, **arrow functions don’t have their own this. Now we know they don’t have the special arguments object either.**

#### Spread operator

1. **...arr** is used in the function call, it **“expands” an iterable object** arr into the list of arguments.
2.  there’s a subtle difference between **Array.from(obj) and [...obj]**
    * **Array.from** operates on both **array-likes and iterables.**
    * **The spread operator operates only on iterables.**
    * for the task of turning something into an array, **Array.from** tends to be more universal.

### Summary

1. When we see **"..."** in the code, it is either rest parameters or the spread operator. There’s an easy way to distinguish between them: 
    * **When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.**
    * **When ... occurs in a function call or alike, it’s called a “spread operator” and expands an array into a list.
Use patterns.**
2. Rest parameters are used to create functions that accept any number of arguments.
3. **The spread operator is used to pass an array to functions that normally require a list of many arguments. Together they help to travel between a list and an array of parameters with ease.**
4. All arguments of a function call are also available in “old-style” **arguments: array-like** iterable object.

### Code

~~~

function power(base, n) {

    if (n == 1) {
        return base;
    } else{
       return base*power(base,n-1);
    }
}

console.log(power(2, 4)); // 16

// rest parameters

function sum(x,y,...z){
    // ...z represent rest paratmeter. and takes argument in the form of array
    // and main thing it nust be last argument
}

// downside is that although arguments is both array-like and iterable, it’s not an array. 
//It does not support array methods, so we can’t call arguments.map(...) for example.

function showName() {
  console.log( arguments.length );
  console.log( arguments[0] );
  console.log( arguments[1] );

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");
// output
// 2
// Julius
// Caesar
// 1
// Ilya
// undefined

// Arrow functions do not have "arguments" 
// If we access the arguments object from an arrow function, it takes them from the outer “normal” function.    
//As we remember, arrow functions don’t have their own this. Now we know they don’t have the special arguments object either.


// Spread operator  ...
console.log(Math.max(1,2,3));// 3
let array=[1,2,3];
console.log(Math.max(array)); NaN
//neww to convert arr to element list
console.log(...array); // 1 2 3  ...array can not assign to varibles
console.log([...array,4,5])//1, 2, 3, 4, 5
console.log(typeof ([1,2,3]+[1,2,3])); //string



let str = "Hello";

console.log( [...str] ); //[ 'H', 'e', 'l', 'l', 'o' ]
//So, for a string, for..of returns characters and ...str becomes "H","e","l","l","o". The list of characters 
//is passed to array initializer [...str].
// For this particular task we could also use Array.from, because it converts an iterable (like a string) into an array

console.log(Array.from(str));// [ 'H', 'e', 'l', 'l', 'o' ]
// Array.from operates on both array-likes and iterables.\
//The spread operator operates only on iterables.

console.log(Object.assign([],[1,2,3],[4,5],[1,2,3,4]));// it wont work for arrays

~~~