### Functions

1. default value we can provide -
~~~
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}
showMessage("Ann"); // Ann: no text given
~~~
2. In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.
3. It is possible to use return without a value. That causes the function to exit immediately.
4. A function with an empty return or without it returns **undefined**.
5. Functions naming conventions  
* showMessage(..)     // shows a message
* getAge(..)          // returns the age (gets it somehow)
* calcSum(..)         // calculates a sum and returns the result
* createForm(..)      // creates a form (and usually returns it)
* checkPermission(..) // checks a permission, returns true/false

### code
~~~
function getText()
{
    return "no text given";
}
function showMessage(from, text = getText()) {
  console.log("from -" + from +" next "+text);
}
showMessage();//"from -undefined next no text given"
showMessage("Bharat"); // "from -undefined next no text given"
showMessage("Bharat","Says Hi"); // from -Bharat next Says Hi
//-------------------------------------------------------------------------------------
let sum=function(x,y)
{
    return;
}
console.log(sum()); // undefined

let sum1=function(x,y)
{
    return "";
}
console.log(sum1());//""
~~~