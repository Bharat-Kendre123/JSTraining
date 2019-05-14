### Type Conversions

1. **Most of the time, operators and functions automatically convert the values given to them to the right type.**

2.  call the **String(value)** function to convert a value to a string:

3. Numeric conversion rules: **Number(value)**

	Value	->		Becomes…
	* undefined	->	NaN
	* null	->		0
	* true 	->		1
	* false	->		0
    * string ->	Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
	
4. Almost all mathematical operations convert values to numbers. **A notable exception is addition +. 
   If one of the added values is a string, the other one is also converted to a string.**
   
5. **Boolean -Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false. Other values become true.**

6. **any valid string except empty string result in true value**

### Code
~~~
let x;
console.log(String(x));//"undefined"
x=3;
console.log(String(x)); //"3"

console.log(String({  //[object object]
    name:"bharat",
    age:27,
    salary:100
}))

x=["bharat","Kendre"];
console.log(String(x));  //"bharat,kendre"

x=Infinity;
console.log(String(x)); //"Infinity"

console.log({          // { name: 'bharat', age: 10 }
    name:"bharat",
    age:10
})

x=true;
console.log(String(true));//"true"
console.log(true)  //true

// Number() -- constructor

x="3";
console.log(Number(x)); //3
x="bharat";
console.log(Number(x)); //NaN  - it also comes under Number data type
x="";
console.log(Number(x)); //0    - empty string result in zero
x=" ";
console.log(Number(x)); //0  - removes the start and end whitespaces and take the string
x=true;
console.log(Number(x)); //1
x=false;
console.log(Number(x)); //0
x={
    name:"bharat",
    age:10
}
console.log(Number(x)); //NaN
x=null;
console.log(Number(x)); //0 null becomes zero
x="1234 56";
console.log(Number(x)); //NaN
x=" 1234";
console.log(Number(x)); //1234
x=" 1234 ";
console.log(Number(x)); //1234
x=undefined;
console.log(Number(x)); //NaN

// Boolean constructor

console.log(Boolean()); // false
console.log(Boolean(""));//false
console.log(Boolean(null));//false
console.log(Boolean(NaN));//false
console.log(Boolean(undefined));//false
console.log(Boolean(0));//false
console.log(Boolean(" ")); // true - space is also true
console.log(Boolean("abh"));//true
console.log(Boolean(Infinity));//true
console.log(Boolean(-Infinity));//true

// Task
console.log("" + 1 + 0)//10
console.log("" - 1)//-1  -other than + operator string will get convert it into number
                    // Number("") => 0
console.log( true + false);//1
console.log(6 / "3");//2
console.log("2" * "3");//6
console.log(4 + 5 + "px");//9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2);//2
console.log("4px" - 2);//NaN
console.log( 7 / 0);//Infinity
console.log("  -9  " + 5);//  -9 5
console.log("  -9  " - 5);//-14
console.log(null+1);//1
console.log(undefined + 1);//NaN NUmber(undefined) =NaN
~~~