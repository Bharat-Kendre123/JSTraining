### Loops

1. A single execution of the loop body is called an iteration.
2.  we can not use **break** and **continue** directive in **ternary operator**. It is syntaxt error.
3.  The ordinary break after input would only break the inner loop. That’s not sufficient–labels, come to the rescue!
~~~    
outer: for (let i = 0; i < 3; i++) {
 for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)
    // do something with the value...
  }
}
~~~
4. A call to **break/continue** is only possible from inside a loop and the label must be somewhere above the directive.
5. **Switch** uses strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.

### code
// lables
Bharat: 
for(1=10;i>-1;i--)
{
    if(i==0)
    {
        break Bharat; 
    }
}