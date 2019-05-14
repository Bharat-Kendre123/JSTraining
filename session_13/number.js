let x=1e2;
console.log(x); //100
x=1.2e1;
console.log(x);//12
x=1e-3;
console.log(x);//0.001   =>1/1000=0.001

// hexa decimal
console.log( 0xFF ); // 255 hexa

//ocal
console.log(012);//10

//binary
console.log(0b111);//7

//toString(base)
let num1=10;
console.log(num1.toString(10));//10 as base 10
console.log(num1.toString(2))//1010
console.log(num1.toString(8));//12
console.log(num1.toString(3));//101
console.log(num1.toString());//10   -- default base is 10

console.log(1234..toString());//1234
console.log(123.33.toString());//123.33  => floating number behaviour

// rounding functions
console.log(Math.floor(3.2));//3  --- round down
console.log(Math.ceil(3.2));//4   --- round up
console.log(Math.round(3.3));//3  ---round to nearest integer
console.log(Math.round(3.6));//4
console.log(Math.trunc(6.5));//6  --- removes fraction part

//toFixed(digits)-- to round the digits after decimal points
console.log(123.2344.toFixed(1));//123.2
console.log(typeof 123.2344.toFixed(1) == "string");//true
console.log(123.12.toFixed(5));//123.12000

//convert to number type
console.log(typeof +(123.12.toFixed(2)));//number

//isNaN(value)
console.log(isNaN(1));//false
console.log(isNaN(NaN));//true
console.log(isNaN(true));//false
console.log(isNaN("Bharat"));//true
console.log(isNaN(null));//false

//NaN is not equal to any value. Even not equal to itself
console.log(NaN==NaN);//false

//isFinite(value)  -- we can use this method to check the number is valid or not
console.log(isFinite(1));//true
console.log(isFinite(Infinity));//false
console.log(isFinite("String"));//false
console.log(isFinite(NaN));//false

// Compare with Object.is   internally uses ===. but for NaN it works fine
console.log(Object.is(NaN,NaN));//true
console.log(Object.is("1",1));//false
console.log(0===-0);
console.log(Object.is(0,-0));//false

//parseInt and parseFloat
console.log(parseFloat(123.34));//123.34
console.log(parseInt(123.3));//123
console.log(parseFloat("123.12.23"))//123.12
console.log(parseInt("122.23.22sdvd"))//122
console.log(parseInt("s123"));//NaN
console.log(parseFloat("s233.2"))//NaN

// Math functions
console.log(Math.max(1,1.2,1));//1.2
console.log(Math.min());//Infinity
console.log(Math.min(1,1,2,1));//1
console.log(Math.max());//-Infinity

//parseInt(str,radix)
console.log(parseInt("123.d",10));//123