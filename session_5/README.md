### Logical Operators

#### Logical AND operator
1. forget the origan use of OR operator. That we used till now.
2. The extended algorithm works as follows.Given multiple OR’ed values:

* result = value1 || value2 || value3;
The OR || operator does the following:
* Evaluates operands from left to right.
* For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
* If all operands have been evaluated (i.e. all were false), returns the last operand.

#### Logical AND operator

1. AND finds the first falsy value .iven multiple AND’ed values:

2. eg  result= value1 && value2 && value3;
The AND && operator does the following:

* Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.

#### Precedence
1. The precedence of AND && operator is higher than OR ||. So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).

#### NOT Operator
1. A double NOT !! is sometimes used for converting a value to boolean type:
* alert( !!"non-empty string" ); // true
* alert( !!null ); // false
* That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

### Code
~~~
// logical OR operator

var x=2,y=3;
console.log(x||y);//2 returns always first truthy value
console.log("" || null|| "Hi Bharat");//"Hi Bharat" 
console.log("" || undefined || "" || 5 || null);//5
console.log("" || undefined || "" || null);// null   =>if all operands are false it returns last operand
let m;
console.log("" || "bharat" || (m=3)); // assigment will not happen
console.log("value of m is  =>"+m);

// logical AND operator
console.log("" && 3);//""
console.log(null && 3)//null
console.log(2 && 3)//3

//Logical operator AND has higher precedence than Logical OR
console.log(2 || 3 && 4); //2
console.log(2 && 3 || 4);//3
console.log(2 && null || 4);// 4

//Logical Not(!) operator
console.log(!3);//false
console.log(!!3);//true
~~~