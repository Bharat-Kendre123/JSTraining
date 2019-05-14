### Number Type

<<<<<<< HEAD
1. There are 6 primitive types: **string, number, boolean, symbol, null** and **undefined.**
2. All numbers in JavaScript are stored in **64-bit format IEEE-754,** also known as **“double precision floating point numbers”.**
3. The method **num.toString(base)** returns a **string** representation of num in the numeral system with the given base.The base can vary from **2 to 36. By default it’s 10.**
4. Please note that two dots in **123456..toString(36)** is not a typo. **If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it**.If we placed a single dot: 123456.toString(36), then there would be an error, because JavaScript syntax implies the decimal part after the first dot. And if we place one more dot, then JavaScript knows that the decimal part is empty and now goes the method. Also could write **(123456).toString(36).**
=======
1. There are 6 primitive types: string, number, boolean, symbol, null and undefined.
2. All numbers in JavaScript are stored in **64-bit format IEEE-754,** also known as **“double precision floating point numbers”.**
3. The method num.toString(base) returns a string representation of num in the numeral system with the given base. The base can vary from 2 to 36. By default it’s 10.
4. Please note that two dots in 123456..toString(36) is not a typo. If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it.If we placed a single dot: 123456.toString(36), then there would be an error, because JavaScript syntax implies the decimal part after the first dot. And if we place one more dot, then JavaScript knows that the decimal part is empty and now goes the method. Also could write (123456).toString(36).
>>>>>>> 1f77c236296eff11dc3c56eb38f6e7177f3e5d1f
5. There are several built-in functions for rounding:
    * **Math.floor**
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
    * **Math.ceil**
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
    * **Math.round**
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4 and -1.1 becomes -1.
    * **Math.trunc**
Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
<<<<<<< HEAD
5. Another funny consequence of the internal representation of numbers is the **existence of two zeroes: 0 and -0.** That’s because a sign is represented by a single bit, so every number can be positive or negative, including a zero.
6. But do we need **isNaN()** function? Can’t we just use the **comparison === NaN?** Sorry, but the answer is no. The **value NaN is unique in that it does not equal anything, including itself.**
7. **isNaN(value)** converts its argument to a number and then tests it for being NaN.
8. **isFinite(value)** converts its argument to a number and returns true if it’s a regular number, **not NaN/Infinity/-Infinity.** Sometimes isFinite is used to validate whether a **string value is a regular number**.
9. There is a special built-in method **Object.is** that compares values **like ===**, but is more reliable for two edge cases: 
    * It works with NaN: **Object.is(NaN, NaN) === true,** that’s a good thing.
    * Values 0 and -0 are different: **Object.is(0, -0) === false,** technically that’s true, because internally the number has a sign bit that may be different even if all other bits are zeroes.
    * **In all other cases, Object.is(a, b) is the same as a === b.**
    * **This way of comparison is often used in JavaScript specification. When an internal algorithm needs to compare two values for being exactly the same, it uses Object.is (internally called SameValue).**

### parseInt and parseFloat

1. **Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails.**
2. They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. The function parseInt returns an integer, whilst parseFloat will return a floating-point number.
3. The second argument of parseInt(str, radix)
The parseInt() function has an optional second parameter. It specifies the base of the numeral system, so parseInt can also **parse strings of hex numbers, binary numbers and so on.**
=======
5. Another funny consequence of the internal representation of numbers is the existence of two zeroes: 0 and -0.That’s because a sign is represented by a single bit, so every number can be positive or negative, including a zero.
6. But do we need this function? Can’t we just use the comparison === NaN? Sorry, but the answer is no. The value NaN is unique in that it does not equal anything, including itself.
7. isNaN(value) converts its argument to a number and then tests it for being NaN.
8. isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity. Sometimes isFinite is used to validate whether a string value is a regular number.
9. There is a special built-in method Object.is that compares values like ===, but is more reliable for two edge cases: 
    * It works with NaN: Object.is(NaN, NaN) === true, that’s a good thing.
    * Values 0 and -0 are different: Object.is(0, -0) === false, technically that’s true, because internally the number has a sign bit that may be different even if all other bits are zeroes.
    * In all other cases, Object.is(a, b) is the same as a === b.
    * This way of comparison is often used in JavaScript specification. When an internal algorithm needs to compare two values for being exactly the same, it uses Object.is (internally called SameValue).

### parseInt and parseFloat

1. Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails.
2. They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. The function parseInt returns an integer, whilst parseFloat will return a floating-point number.
3. The second argument of parseInt(str, radix)
The parseInt() function has an optional second parameter. It specifies the base of the numeral system, so parseInt can also parse strings of hex numbers, binary numbers and so on:
>>>>>>> 1f77c236296eff11dc3c56eb38f6e7177f3e5d1f

### Math functions

1. JavaScript has a built-in Math object which contains a small library of mathematical functions and constants.
<<<<<<< HEAD
2. **Math.random()**
    * Returns a random number from 0 to 1 (not including 1)
3. **Math.max(a, b, c...) / Math.min(a, b, c...)**
    * Returns the greatest/smallest from the arbitrary number of arguments.
4. **Math.pow(n, power)**
=======
2. Math.random()
    * Returns a random number from 0 to 1 (not including 1)
3. Math.max(a, b, c...) / Math.min(a, b, c...)
    * Returns the greatest/smallest from the arbitrary number of arguments.
4. Math.pow(n, power)
>>>>>>> 1f77c236296eff11dc3c56eb38f6e7177f3e5d1f
    * Returns n raised the given power

### Summary

1. To write big numbers:
    * Append "e" with the zeroes count to the number. Like: 123e6 is 123 with 6 zeroes.
A negative number after "e" causes the number to be divided by 1 with given zeroes. That’s for one-millionth or such.
2. For different numeral systems:
    * Can write numbers directly in hex (0x), octal (0o) and binary (0b) systems
3. parseInt(str, base) parses an integer from any numeral system with base: 2 ≤ base ≤ 36.
4. num.toString(base) converts a number to a string in the numeral system with the given base.
5. For converting values like 12pt and 100px to a number:
    * Use parseInt/parseFloat for the “soft” conversion, which reads a number from a string and then returns the value they could read before the error.
6. For fractions:
    * Round using Math.floor, Math.ceil, Math.trunc, Math.round or num.toFixed(precision).
7. Make sure to remember there’s a loss of precision when working with fractions.

### Code
~~~
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
~~~
    