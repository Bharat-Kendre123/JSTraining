### F.prototype

1. If F.prototype is an object, then new operator uses it to set [[Prototype]] for the new object.
2. F.prototype property is only used when new F is called, it assigns [[Prototype]] of the new object. After that, there’s no connection between F.prototype and the new object. Think of it as a “one-time gift”.
3. If, after the creation, F.prototype property changes (F.prototype = <another object>), then new objects created by new F will have another object as [[Prototype]], but already existing objects keep the old one.


### Summary

1. In this chapter we briefly described the way of setting a [[Prototype]] for objects created via a constructor function. Later we’ll see more advanced programming patterns that rely on it.
2. Everything is quite simple, just few notes to make things clear:
    * The F.prototype property is not the same as [[Prototype]]. The only thing F.prototype does: it sets [[Prototype]] of new objects when new F() is called.
    * The value of F.prototype should be either an object or null: other values won’t work.
    * The "prototype" property only has such a special effect when set on a constructor function, and invoked with new.
On regular objects the prototype is nothing special:
    * let user = {
  name: "John",
  prototype: "Bla-bla" // no magic at all
};
    * By default all functions have F.prototype = { constructor: F }, so we can get the constructor of an object by accessing its "constructor" property.

### Code

~~~
let animal={
    eats:true
};


function Rabbit2(name){

    this.name=name;

}

Rabbit2.prototype=animal;

let rabbit=new Rabbit2("pagal");

console.log(rabbit.eats); // true

Rabbit2.prototype=null;

let rabbit2=new Rabbit2("mad");

console.log(rabbit.eats); // true
console.log(rabbit2.eats); // undefined

//*************************************************************************** */

function User(){}
console.log(User.prototype);  // User {}
console.log(User.prototype.constructor == User);// true

let user2=new User.prototype.constructor();

console.log(user2); // User {}  

//************************************************************************** */

function Rabbit2() {}
Rabbit2.prototype = {
  jumps: true
};

let rabbit3 = new Rabbit2();
console.log(rabbit.constructor === Rabbit2); // false

// So, to keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:

function Computor(){
    this.keyBoard=true;
    this.isTouchmouse=false;

}

Computor.prototype.constructor=Computor;

//***************************TASK1 ********************************************/
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit.eats ); // true

// The assignment to Rabbit.prototype sets up [[Prototype]] for new objects, but it does not affect the existing ones.

//***************TASK2 ************************************** */

function Rabbit2() {}
Rabbit2.prototype = {
  eats: true
};

let rabbit2 = new Rabbit2();

Rabbit2.prototype.eats = false;

console.log( rabbit2.eats ); // false

//*******************************TASK 3******************************** */

function Rabbit3() {}
Rabbit3.prototype = {
  eats: true
};

let rabbit3 = new Rabbit3();

delete rabbit3.eats;

console.log( rabbit3.eats ); // true

//********************************TASK 4************************************ */

function Rabbit4() {}
Rabbit4.prototype = {
  eats: true
};

let rabbit4 = new Rabbit4();

delete Rabbit4.prototype.eats;

console.log( rabbit4.eats ); // undefined

//****************************TASK 5******************************************** */

function User(){};

let user1=new User();

let user2=new user1.constructor();
~~~