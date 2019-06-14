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