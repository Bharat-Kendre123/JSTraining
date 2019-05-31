
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