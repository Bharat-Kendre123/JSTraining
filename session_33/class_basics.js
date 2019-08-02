class Employee{
        constructor(name){
            console.log(`My name is ${name}`);
            this.name=name;
        }

        sayHi(){
            return this.name;
        }
};  


let employee=new Employee(`bharat`);
console.log(employee);
employee.age=10; // can I add properties at run time also
console.log(employee);

console.log(typeof Employee);// function    

// prrof of class as function

console.log(Employee.prototype === employee.__proto__);  // true.
console.log(Employee.prototype.sayHi());// undefined . Do not have state

// Object.getOwnPropertyNames

console.log(Object.getOwnPropertyNames(employee)); // [ 'name', 'age' ]
console.log(Object.getOwnPropertyNames(employee.__proto__)); //[ 'constructor', 'sayHi' ]

// calling constructor 

//let temp=employee.constructor(); // TypeError: Class constructor Employee cannot be invoked without 'new'

let employee1=new employee.constructor(`krishna`); //My name is krishna
//Employee();//// TypeError: Class constructor Employee cannot be invoked without 'new'

console.log(Employee);// [Function: Employee]
//console.log(Employee.toString());

// class Employee{
//         constructor(name){
//             console.log(`My name is ${name}`);
//             this.name=name;
//         }

//         sayHi(){
//             return this.name;
//         }
// }

// *********** CLASS EXPRESSION ************************************

let user= class{
    
};

// with name

let user2=class Myuser{

    sayHi(){
        console.log(`Hi There`);
    }
}

//console.log(Myuser); // ReferenceError: Myuser is not defined

let user3=new user2();
console.log(user3); // Myuser {}

// We can even make classes dynamically “on-demand”, like this:

    function makeClass(phrase){

        return class{
            sayHi(){
                console.log(`${phrase} called me`);
            }
        }
    }


let class1=makeClass(`bharat`);
console.log(class1); // [Function]

let obj=new class1();
console.log(obj); //{}

obj.sayHi(); // bharat called me

//******************************************************************************** */
// Getters/setters, other shorthands

   //    Just like literal objects, classes may include getters/setters, generators, computed properties etc.

   class User {

  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let user4 = new User("John");
console.log(user4.name); // John

user = new User(""); // Name too short.  .. it internally calls setter

//***************************************************************************************************** */

// Here’s an example with computed properties:
function f() { return "sayHi"; }

class User5 {
  [f()]() {
    console.log("Hello");
  }

}

new User5().sayHi(); // Hello  

//************************************************************************************************************** */

// Class properties

class Animal{
  
    sayHi(){
        console.log(`Hi I am ${this.name}`);
    }
}


Animal.name=`Tiger`;
new Animal().sayHi();  // Hi I am undefined

//******************************************************************************************************************** */


class Animal2{
  
  constructor(){
      this.name=`Lion`;  // this is compulsory in constructors
  }
    sayHi(){
        console.log(`Hi I am ${this.name}`);
    }
}

new Animal2().sayHi(); // Hi I am Lion