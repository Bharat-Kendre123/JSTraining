### String Type

### Code

~~~
console.log("Bharat".length);//5
console.log("BHarat"[1]);//H
console.log("Bharat".charAt(1));//h

//The only difference between them is that if no character is found, [] returns undefined, and charAt returns an empty string:
console.log("Bharat"[100]);//undefined
console.log("Bharat".charAt(100));//""
console.log("BHARAT".toLowerCase());//bharat
console.log("bharat".toUpperCase());//BHARAT
console.log("bharat".indexOf('ha'));//1
console.log("bharat".indexOf('a'));//2
console.log("bharat".indexOf('ra'));//3
console.log("bharat".indexOf('bharat'));//0

//For instance, the first occurrence of "id" is at position 1. To look for the next occurrence, let’s start the search from position 2:
console.log("Bharat".indexOf('a',2));//2
console.log("Bharat".indexOf('a',3));//4

//There is also a similar method str.lastIndexOf(substr, position) that searches from the end of a string to its beginning.
console.log("Bharat".lastIndexOf('a'));//4
console.log("Bharat".lastIndexOf('a',3));//2
console.log("Bharat".indexOf('s'));//-1

// includes, startsWith, endsWith
console.log("Bharat".includes("rat"));//true
console.log("Bharat".includes("g"));//false
console.log("Bharat".includes("a",3));//true

//There are 3 methods in JavaScript to get a substring: substring, substr and slice.

//1. Returns the part of the string from start to (but not including) end.
let name="bharat";
console.log(name.slice(1,3));//ha   -- excluds sec index position
console.log(name.slice(1));//harat
console.log(name.slice(-4,-1));//ara

//2. Returns the part of the string between start and end.
console.log(name.substring(1,3));//ha
//Negative arguments are (unlike slice) not supported, they are treated as 0.
console.log(name.substring(3,1));//ha
console.log(name.substring(-1,2));//bh

// Returns the part of the string from start, with the given length.
console.log(name.substr(2,2));//ar

//Returns the code for the character at position pos:
console.log("Bharat".codePointAt(1));//104

// Creates a character by its numeric code
console.log(String.fromCodePoint(104));//h

//
console.log("bharat".localeCompare("BHarat"));
console.log("bharat">"Bharat");//

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
    