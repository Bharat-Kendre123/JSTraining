## Comparision 

##### Comparision
1. When comparing values of different types, JavaScript converts the values to numbers.
2. equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating 
	it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.On the other hand, the equality check == for
	undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. 
	That’s why (2) null == 0 is false.
3. NaN is a special numeric value which returns false for all comparisons.

##### Summary
* Comparison operators return a boolean value.
* Strings are compared letter-by-letter in the “dictionary” order.
* When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
* The values null and undefined equal == each other and do not equal any other value.
* Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.

### Code

~~~~
console.log(undefined>1);//false
console.log(false==false);//true
console.log(null==true);//false
console.log(null==false);//false
console.log(""=="s");//false
console.log(""=="");//true
console.log(0=="");//true

console.log("0"!=0);//false
console.log("1"!=2)//true
console.log("1"!==2)//true

//== vs >,>=,<,<=
console.log(null==undefined);//true
console.log(null===undefined);//false
console.log(null=="");//false   
console.log(null==0);//false
console.log(null>=0);//true
console.log(undefined>=0);//false

task
console.log(5>4);//true
console.log("apple" > "pineapple");//false
console.log("2" > "12");//true
console.log(null == "\n0\n");//false
console.log( null === +"\n0\n");//false
~~~~