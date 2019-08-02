### Native prototypes

1. When new Object() is called (or a literal object {...} is created), the [[Prototype]] of it is set to Object.prototype

#### Primitives

1. As we remember, they are not objects. But if we try to access their properties, then temporary wrapper objects are created using built-in constructors String, Number, Boolean, they provide the methods and disappear.
2. These objects are created invisibly to us and most engines optimize them out, but the specification describes it exactly this way. Methods of these objects also reside in prototypes, available as String.prototype, Number.prototype and Boolean.prototype.
3. Values **null** and **undefined** have no object wrappers. Special values null and undefined stand apart. They have no object wrappers, so methods and properties are not available for them. And there are no corresponding prototypes too.

#### Changing native prototypes

1. Prototypes are global, so it’s easy to get a conflict. If two libraries add a method String.prototype.show, then one of them will be overwriting the other. So, generally, modifying a native prototype is considered a bad idea.

### Summary

1. All built-in objects follow the same pattern:
    * The methods are stored in the prototype (Array.prototype, Object.prototype, Date.prototype etc).
    * The object itself stores only the data (array items, object properties, the date).
    * Primitives also store methods in prototypes of wrapper objects: Number.prototype, String.prototype, Boolean.prototype. * Only undefined and null do not have wrapper objects.
2. Built-in prototypes can be modified or populated with new methods. But it’s not recommended to change them. Probably the only allowable cause is when we add-in a new standard, but not yet supported by the engine JavaScript method.

### Code

~~~
let obj=new Object();
console.log(obj)

console.log(obj.__proto__==Object.prototype); //false

console.log(obj.__proto__.__proto__);//null

let arr=[];

console.log(arr.__proto__.__proto__);// {}

console.log("push" in arr.__proto__);//true

console.log("toString" in arr.__proto__.__proto__);//true 

// Some methods in prototypes may overlap, for instance, Array.prototype has its own toString that lists comma-delimited elements:

function fun(){}

console.log(fun); //[Function: fun]

console.log(fun.__proto__);//[Function]

console.log("apply" in fun.__proto__); //true

console.log('----------------------------------------------------------------------------------');

console.log(String.__proto__); //[Function]
console.log("toString" in String.__proto__); // true

String.prototype.show= function(name){
        console.log(name);  //bharat
}

console.log(`Bjharat`.show('bharat')); //undefined

console.log(`show` in String);//flase

console.log("show" in String.prototype);//true

//Borrowing from prototypes

let arr1=[1,2,3];
console.log(arr1.join('  '));//1  2  3

let array_like={

0:0,
1:1,
length:2
};

array_like.__proto__=Array.prototype;
console.log(array_like.push(2));
console.log(array_like.join('-')); //0-1-2

// It works, because the internal algorithm of the built-in join 
// method only cares about the correct indexes and the length
//  property, it doesn’t check that the object is indeed the 
//  array. And many built-in methods are like that.

//********************************************************************* */

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

f.defer(1000);
~~~
