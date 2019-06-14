### Prototypal inheritance

1. For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

#### [[Prototype]]

1. In JavaScript, objects have a **special hidden property [[Prototype]]** (as named in the specification), that is either **null** or **references another object**. That object is called **“a prototype”.**
2. __proto__ is a historical **getter/setter** for **[[Prototype]]**. please note that __proto__ is not the same as [[Prototype]]. That’s a **getter/setter** for it.
3. There are actually only **two limitations:**
    * The **references can’t go in circles**. JavaScript will **throw an error** if we try to assign __proto__ in **a circle**.
    * The **value** of __proto__ can be either **an object** or **null**, other **types** (like primitives) are **ignored**.
4. Also it may be obvious, but still: there can be only one [[Prototype]]. An object may not inherit from two others.
5. The prototype is only used for **reading properties**. **Write/delete** operations work directly with the object.
6. **this** is not affected by prototypes at all.
7. **No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.**
8. But why **hasOwnProperty** does not appear in **for..in loop**, like eats and jumps, **if it lists all inherited properties.** The **answer** is simple: **it’s not enumerable**. Just like all other properties of **Object.prototype**, it has **enumerable:false flag**. That’s why they are not listed.

### Summary

1. In JavaScript, all objects have a hidden **[[Prototype]] property** that’s either another object or null.
2. We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
3. The object referenced by [[Prototype]] is called a “prototype”.
4. If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
5. **Write/delete** operations for act directly on the object, they don’t use the prototype (assuming it’s a data property, not is a setter).
6. If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
7. The **for..in loop** iterates over both own and inherited properties. All other **key/value-getting** methods only operate **on the object itself.**


### Code

~~~
// ******************** __proto__ *******************

let animal = {
    name: `Animal`,
    eat: true,
    drink: true,
    walk() {
        console.log(`I am ${this.name}`);  // I am Rabbit -- if name property is present in Rabbit.
    }                                      // I am Animal  -- if name property is not present in Rabbit.
};

let rabbit = {
    // name:`Rabbit`,
    run: true,
};

console.log(rabbit.eat); // undefined

rabbit.__proto__ = animal;

console.log(rabbit.eat); // true;

console.log(rabbit.__proto__);  // { eat: true, drink: true } -- prototype object

console.log(rabbit.walk()); // undefined


//************************************************************************************************ */

console.log(`-----------------------------------------------------------------------------`);
let user = {
    firstName: `User`,
    lastName: `Kendre`,

    set fullName(name) {
        console.log(`I am in User`);
        this.firstName = name.split(" ")[0];
        console.log(this.firstName);
        console.log(name);
    },

    get fullName() {
        console.log(`I am in User`);
        return this.firstName + " " + this.lastName;
    }
};

let admin = {
    firstName: `Admin`,
    lastName: `Kendre`,
    __proto__: user,

    set fullName(name) {
        console.log(`I am in Admin`);
        this.firstName = name.split(" ")[0];
    },

    get fullName() {
        console.log(`I am in Admin`);
        return this.firstName + " " + this.lastName;
    }
};

// we are accessing the user object but can not write data to the user using __proto__  

admin.fullName = 'Guest kendre';

console.log(admin.firstName);
console.log(user.firstName);

// I am in Admin
// Guest
// User

console.log(`-----------------------------------------------------------------------------`);

// this value

let vehicle = {
    start() {
        if (this.isStart) {
            console.log("Please use gears for movement");
        } else {
            console.log(`Please start the vehicle firsrt`);
        }
    },
    pressStartButton() {
        this.isStart = true;
    }
}


let car={
    __proto__:vehicle
};

car.pressStartButton();
console.log(car.isStart);// true
console.log(car['isStart']);// true
console.log(vehicle['isStart']);//undefined

console.log(`-----------------------------------------------------------------------------`);
//****************************************************************************** */

let person={
    name:`bharat kendre`,
    age:27,
};

let employee={
    salary:10000,
    company:`Travelex India PVT LIM`,
    __proto__:person,
    getAge(){}
};


// Object.keys only return own keys
console.log(Object.keys(employee));  // [ 'salary', 'company' ]

// for..in loops over both own and inherited keys
for(let key in employee){
    console.log(key);   // salary , company ,name , age
}


for(let key in employee){
    console.log(`${key}-${employee.hasOwnProperty(key)}`)
      // salary , company ,name , age
}

// salary-true
// company-true
// name-false
// age-false

console.log(`-----------------------------------------------------------------------------`);

//************************************************************************************ */

let student={
    name:`Pooja`,
    age:18,
    getName(){
        return this.name;
    }
};

let sGGSStudent={
    collegeName:`SGGS`,
    getCollegeName(){
        return this.collegeName;
    },
    __proto__:student
};
for(let key in student){
    console.log(student[key])
}

// Pooja
// 18
// [Function: getName]
console.log(`-------------------------------------------------------------------`);
for(let key in sGGSStudent){
    console.log(key);
}

//************************************************************************************

let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // true

delete rabbit.jumps;

console.log( rabbit.jumps ); // null

delete animal.jumps;

console.log( rabbit.jumps ); // undefined

//***********************************************************************************

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();  // rabbit

//*******************************TASK 3***************************** */

let hamster = {
  // stomach: [],
  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = { stomach: [],
  __proto__: hamster
};

let lazy = {
     stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple

~~~