### Constructor functions

1. Constructor functions technically are regular functions. There are two conventions though:
    * They are named with **capital letter first**.
    * They should be executed only with **"new"** operator.
2. When a function is executed as **new User(...),** it does the following steps:
    * A **new empty object** is created and assigned to **this**.
    * The function body executes. **Usually it modifies this, adds new properties to it**.
    * **The value of this is returned.**
3. Let’s note once again – technically, **any function can be used as a constructor**. That is: any function can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.
4. Inside a function, we can check whether it was **called with new or without it**, using a special **new.target property**.It is **empty** for regular calls and **equals** the function if called with new.
5. By the way, we can omit parentheses after new, if it has no arguments.

### Summary

1. Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
2. Constructor functions should only be called using **new**. Such a call implies a creation of empty this at the start and returning the populated one at the end.
3. We can use constructor functions to make multiple similar objects.
4 JavaScript provides constructor functions for many built-in language objects: like Date for dates, Set for sets and others that we plan to study.

### code

~~~
function User(name)
{
    console.log(new.target);  // new.target -it is used to decide it is constructor call or normal call
    this.name=name;             // for normal call it has undefined value and for constructor call it has value
    this.sayHi=function(){
        console.log("Hi "+this.name);
    };
}

let user1=new User("Bharat");
let user2=new User("Krishna");
console.log(user1.name);//Bharat
console.log(user2.name)//Krishna
User("Balu");
let user3=new User;
console.log(user3.name);//undefined
user2.sayHi(); // Hi Krishna
~~~