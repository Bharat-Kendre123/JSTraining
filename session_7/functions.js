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