//Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
// Task 1
console.log(upFirst("john")=="John");// true

function upFirst(name){
let modifiedName=name[0].toUpperCase() + name.slice(1);
console.log(modifiedName)
return modifiedName;
}


// Task 2
let name="bharat XXX"
console.log(name.toUpperCase().includes("XXX"));//true

// task 3 (Extract Money Task)
let money="$123";
console.log(money.trim().slice(1)==123);//true

//1. The internal format for strings is always UTF-16, it is not tied to the page encoding.
//2. The length property has the string length. \n is also one character.