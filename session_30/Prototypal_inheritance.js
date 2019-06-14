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