### Operators
1. The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do 
   anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
    eg. +-1=> Number(-1)
	
2. The exponentiation operator ** is a recent addition to the language.
   For a natural number b, the result of a ** b is a multiplied by itself b times.
   
 3. Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
 
 4. The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is
	evaluated but only the result of the last one is returned.
	eg. let a = (1 + 2, 3 + 4);//7
	
 5. Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.
	Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns
	a = 3, and finally the number after the comma, 7, is not processed so it’s ignored.

### code
~~~
// unary operator
console.log(-1);//-1
console.log(+-1);//-1  + and - both are unary operator
console.log(-+1);//-1
console.log(+"");//0   +""=>Number("")
console.log(+"abv")//NaN
console.log(+undefined)//NaN
console.log(+null)//0

// exponentiation 
console.log(2**3);//8  (2*2*2)  **=>^
console.log(+-2); //-2
//console.log(++2);//error ++/-- => applicale only for variables

///comma operator
console.log((1 + 2, 3 + 4));//7  --will return  last value 
~~~