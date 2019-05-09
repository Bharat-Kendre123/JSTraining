// Infinity
console.log(-1/0)  // -Infinity
// undefined value
var x;
console.log("x value is -" ,x); // undefined

// mathmatical operation with undeined type data
console.log(x+3)  //NaN

// mathmatical operation with number in string
var x="3";
console.log(x*3); // internal typecasting will happen 9

//concationation (String + number)= string
console.log(x+3)  //33

//concatinating string - only possible in backticks quote
console.log(`My name is Bharat and my age is ${x}`); //My name is Bharat and my age is 3
console.log(`${3+3}`); //6
let name = "Ilya";
console.log( `hello ${1}` ); // hello 1
console.log( `hello ${"name"}` );  // hello name
console.log( `hello ${name}` );  // hello Ilya

// boolean data types -
console.log(x==undefined); //false
console.log(null==undefined);//true
console.log(null===undefined); //false
console.log(""==null);         //false
console.log(""==undefined);     //false
console.log(NaN==null); //false
console.log(Infinity==Infinity)//true
console.log(-Infinity==Infinity); //false
console.log(undefined==undefined);//true
console.log(null==null); //true
console.log(NaN==NaN) //false
console.log(NaN===NaN)//false

//typeof operator/typeof() function
console.log((typeof "bharat")=="string"); //true
console.log((typeof null)=="string");    //false
console.log((typeof null)=="object");   //true
var arry=[];
console.log(typeof arry) //object
console.log(typeof NaN) //number
console.log(typeof Infinity) //number
console.log(typeof -Infinity) //number



