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


