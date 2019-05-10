### Type Conversions

1. **Most of the time, operators and functions automatically convert the values given to them to the right type.**

2.  call the **String(value)** function to convert a value to a string:

3. Numeric conversion rules: **NUmber(value)**

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