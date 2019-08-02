### Function Expression and Arrow Function


1. **Why is there a semicolon at the end?** -- There’s no need for ; at the end of code blocks and syntax structures that use them like if { ... }, for { }, function f { } etc. A Function Expression is used inside the statement: let sayHi = ...;, as a value. It’s not a code block, but rather an assignment. The semicolon ; is recommended at the end of statements, no matter what is the value. So the semicolon here is not related to the Function Expression itself, it just terminates the statement.
2. function fun(x,y,z)   -- here x, y and z are functions. The arguments of fun are called callback functions or just callbacks.
3. Function Declaration: a function, declared as a separate statement, in the main code flow.
4. Function Expression: a function, created inside an expression or inside another syntax construct.
5. A Function Expression is created when the execution reaches it and is usable only from that moment.
6. A Function Declaration can be called earlier than it is defined.


### Summary
1. Functions are values. They can be assigned, copied or declared in any place of the code.
2. If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
3. If the function is created as a part of an expression, it’s called a “Function Expression”.
4. Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
5. Function Expressions are created when the execution flow reaches them.
6. In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.
So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future.
7. Arrow functions are handy for one-liners. They come in two flavors:
    * Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result.
    * With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.

### Code

~~~
 // Function Expression

 let sayHi = function() {
   console.log('Hey Bharat');
  };

  sayHi(); // Hey Bharat

  console.log(sayHi);  // [Function: sayHi]

  // Arrow function
  let func = (arg1, arg2, ...argN) => expression


  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
   () =>  console.log("You agreed."),
    () =>console.log("You canceled the execution.")
  );
  

  function confirm(x){

    true
  }
~~~