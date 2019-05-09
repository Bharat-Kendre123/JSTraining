# JSTraining

## Data Type Basics
1. Different engines have different “codenames”. For example:
V8 – in Chrome and Opera.
SpiderMonkey – in Firefox.
There are other codenames like “Trident” and “Chakra” for different versions of IE, “ChakraCore” for Microsoft Edge, “Nitro” and “SquirrelFish” for Safari, etc.

2. Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

3. NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation.

4. The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.

5. Special numeric values formally belong to the “number” type. Of course they are not numbers in the common sense of this word.(NaN,Infinity,-Infinity)

6. In JavaScript, there is no char type. There’s only one type: string. A string may consist of only one character or many of them.

7. In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages. It’s just a special value which represents “nothing”, “empty” or “value unknown”. data type is null.

8. data type of undefined is undefined.

9. As an operator: typeof x. As a function: typeof(x).

10. The result of typeof null is "object". That’s wrong. It is an officially recognized error in typeof, kept for compatibility. Of course, null is not an object. 
    It is a special value with a separate type of its own. So, again, this is an error in the language.

11. There are 7 basic data types in JavaScript.
A. number for numbers of any kind: integer or floating-point.
B. string for strings. A string may have one or more characters, there’s no separate single-character type.
C. boolean for true/false.
D. null for unknown values – a standalone type that has a single value null.
E. undefined for unassigned values – a standalone type that has a single value undefined.
F. object for more complex data structures.
G. symbol for unique identifiers.

12. The typeof operator allows us to see which type is stored in a variable.	
Two forms: typeof x or typeof(x).
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.

13. typeof operator always return string.