// Losing “this”

let user = {
    name: `bharat`,
    sayHi: function () {
        console.log(`Hi Mr/Ms ${this.name}`);
    }
}

setInterval(user.sayHi,1000);


// Hi Mr/Ms undefined ...


// Solution on this

setInterval(()=>user.sayHi(),1000);

// Hi Mr/Ms bharat

//****************************************************************** */

// if user object changes

setInterval(()=>user.sayHi(),1000);

 user=null; // TypeError: Cannot read property 'sayHi' of null

// next soltion

let say = user.sayHi.bind(user);
//setInterval(say,1000);  // // Hi Mr/Ms bharat ....

//*************************************************** */
user = null; // // Hi Mr/Ms bharat ....

// **************************************************************************

// task 1

function f() {
    console.log(this); // ?
}

let user1 = {
    age: 19,
    gg: f.bind(null),
    name: `nbharat`
};

//user1.gg();

//********************************************************************* */

let user3 = {
    name: `bharat`,
    age: 10
}

function displayData() {
    console.log(this); //  name: 'bharat', age: 10 }
    console.log(`name :- ${this.name} and age :- ${this.age}`);
}

let bindFunc = displayData.bind(user3);
bindFunc();
user3 = undefined;
console.log(`after making user3 undefined`);
bindFunc();

// { name: 'bharat', age: 10 }
// name :- bharat and age :- 10
// after making user3 undefined
// { name: 'bharat', age: 10 }
// name :- bharat and age :- 10

//************************************************************* */

function f() {
    console.log(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f(); //John
//A function cannot be re-bound.

//************************************************************ */

// There’s a value in the property of a function. Will it change after bind? Why, elaborate?

function sayHi() {
    console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "John"
});

console.log(bound.test); // what will be the output? why? -- undefined

// The answer: undefined.

// The result of bind is another object. It does not have the test property.

//******************************************************************************* */

function askPassword(ok, fail, password) {
    if (password == "rockstar") {
        ok();
    }
    else {
        fail();
    }
}

let user4 = {
    name: 'John',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },

};

askPassword(user4.loginOk.bind(user4), user4.loginFail.bind(user4)); //fixed John failed to log in