### Object Methods ,this
1. The consequences of unbound this
    *   If you come from another programming language, then you are probably used to the idea of a "bound this", where methods defined in an object always have this referencing that object.

    * In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what’s the object “before the dot”.

    * The concept of run-time evaluated this has both pluses and minuses. On the one hand, a function can be reused for different objects. On the other hand, greater flexibility opens a place for mistakes.

    * Here our position is not to judge whether this language design decision is good or bad. We’ll understand how to work with it, how to get benefits and evade problems.

2. Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function

### Summary

1. Functions that are stored in object properties are called **“methods”**.
1. Methods allow objects to “act” like **object.doSomething().**
3. **Methods can reference the object as this.**
4. The value of this is defined at **run-time.**
5. When a function is declared, it may use this, but that this has no value until the function is called.
That function can be copied between objects.
6. When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
7. Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.

### Code

~~~
// add method in object
let user = {
    name: "Bharat",
    age: 25,
};

user.sayHi = function () {
    console.log("Hi There")
}

user.sayHi();  // A function that is the property(user.sayHi) of an object is called its method.
console.log(user.sayHi);//[function]

// pre-declared function

function sayBye() {
    console.log("Bye Bye");
}

user.sayBye = sayBye;
user.sayBye();

// method inside object

let user2 = {
    sayHi: function () {
        console.log("Say Hi 2");
    },
    sayBye() {    // short hand -
        console.log("Say Bye 2");
    }
}

user2.sayBye();
user2.sayHi();
console.log(user2.sayBye);// [Function: sayBye]

// To access the object, a method can use the this keyword.

let user3={
    name:"bharat",
    sirname:"Kendre",
    printName:function(){
        console.log(this.name);
    },
    printSirName:function(){
        console.log(user3.sirname);//Technically, it’s also possible to access the object without this, by referencing it via the outer variable:
    }                              // never use the identifier to access object properties inside object. Identifier is temp.
};

user3.printName(); // bharat
user3.printSirName();//kendre

// Task

let user5={
    name:"bharat",
}
let user6={
    name:"Krishna"
};

function sayHiGeneral()
{
    console.log(this.name); // this is run time object.
}
user5.sayHi=sayHiGeneral;
user6.sayHi=sayHiGeneral;
user5.sayHi();//bharat
user6.sayHi();//Krishna
sayHiGeneral(); // undefined. (Need to find the reason, why there is no error generated)

let tempHi=user3.printName;
tempHi();
console.log(tempHi);

// task 1

let user7 = {
  name: "John",
  hi() { console.log(this.name); },
  bye() { alert("Bye"); }
};

user7.hi(); // John (the simple call works)

// now let's call user.hi or user.bye depending on the name
(user7.name == "John" ? user7.hi : user7.bye)(); // Error!

// arrow function does not have this

let user8 = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

user8.sayHi(); // Ilya

// task 1

let user = {
  name: "John",
  go: function() { console.log(this.name) }
};  // added semicolne to run the script

(user.go)(); // error - JavaScript does not assume a semicolon before a bracket (user.go)(), so it reads the code like let user = { go:... }(user.go)()

/* Please note that brackets around (user.go) do nothing here. Usually they setup the order of operations, but here the dot . 
works first anyway, so there’s no effect. Only the semicolon thing matters. */

// task 2

let obj, method;

obj = {
  go: function() { console.log(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined


// tsak 3

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user1 = makeUser();
console.log( user1.ref.name ); // What's the result? -undefined


// task 4

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;  // return statement added to complete the task
  },
  down() {
    this.step--;
    return this; // return statement added to complete the task
  },
  showStep: function() { // shows the current step
    console.log( this.step );
  }
};

ladder.up().up().down().showStep();
~~~