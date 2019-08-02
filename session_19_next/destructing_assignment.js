//Array destructuring

let arr =  ['BHarat', 'Kendre'];
console.log(arr);

let [firstName, LastName] =  arr;
console.log(`first name  - ${firstName}`); // first name  - BHarat
console.log(`last name - ${LastName}`); // last name - Kendre

let [firstName1, surname1] = "Ilya Kantor".split(' ');

console.log(`first name  - ${firstName1}`); // first name  - Ilya
console.log(`last name - ${surname1}`); // last name - Kantor

//Unwanted elements of the array can also be thrown away via an extra comma:

let [firstName2, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log( title ); // Consul

// Actually, we can use it with any iterable, not only arrays:
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

//In the previous chapter we saw the Object.entries(obj) method. We can use it with destructuring to loop over keys-and-values of an object:

let user = {
    name: "John",
    age: 30
  };
  
  // loop over keys-and-values
  for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John, then age:30
  }

  // And the same for a map

  let user1 = new Map();
user1.set("name", "John");
user1.set("age", "30");

for (let [key, value] of user1) {
  console.log(`${key}:${value}`); // name:John, then age:30
}

//If we want not just to get first values, but also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":

// The Rest ...

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(rest);  // [ 'Consul', 'of the Roman Republic' ]

//------------------------------------------------
let [firstName3, surname3] = [];

console.log(firstName3); // undefined
console.log(surname3); // undefined

// we can provide default values in destructuring assignment

let [name=`bharat`] = [];
console.log(name); // bharat

// Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.

let [name3=getName(), age=getAge()]=[];

function getName(){
    return `Bharat`;
}

function getAge(){
    return 10;
}

console.log(`name - ${name3} and age - ${age}`); // name - Bharat and age - 10

//--------------------------------------------------------------------------------------------------------------------
// Object destructuring

let employee = {
    eName : `Makadi`,
    eAge : 18,
    eSalary : 1000000,
}

let [key, value] = Object.entries(employee);

for(let [key, value] of Object.entries(employee)){
    console.log(`key is ${key} and value is ${value}`);
}

//---------------------------------------------------'
console.log('--------------------------------------------------------------------');

let options = {
  title1: "Menu",
  width1: 100,
  height1: 200
};

let {title1, width1, height1} = options;

console.log(title1);  // Menu
console.log(width1);  // 100
console.log(height1); // 200


let {title2, width2, height2} = options;

console.log(`title2 - ${title2} width2- ${width2} height2 -${height2}`);
// title2 - undefined width2- undefined height2 -undefined

let {title1:title3, width1:width3, height1:height3} = options;

console.log(`title3 - ${title3} width3- ${width3} height3 -${height3}`);
// title3 - Menu width3- 100 height3 -200


let user4 = {

  color : 'I am Black',
};


let {color : c1 ="Red", First} = user4;

console.log(`Color is ${c1} and First - ${First}`);
// Color is I am Black and First - undefined

// The rest pattern “…”

let {...extra} = options;
console.log(extra); // { title1: 'Menu', width1: 100, height1: 200 }

//---------------------------------------------------------------------------------------------
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let company = {

  noOfEmployee : 10000,
  avgEmpSalary : 523640
};

let noOfEmployee, avgEmpSalary;

({noOfEmployee, avgEmpSalary} = {

  noOfEmployee : 10000,
  avgEmpSalary : 523640

})

console.log(`noOfEmployee - ${noOfEmployee} and avgEmpSalary - ${avgEmpSalary}`);
//noOfEmployee - 10000 and avgEmpSalary - 523640



let options1 = {
  size: {
    width4: 100,
    height4: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width4,
    height4
  },
  items: [item1, item2], // assign items here
  title4 = "Menu" // not present in the object (default value is used)
} = options1;

console.log(title4);  // Menu
console.log(width4);  // 100
console.log(height4); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut

// console.log(`size - ${size}`); -- error . size is not defined

// Smart function parametersv -- USe it Bharat


let makadi = {
  
  Mame : 'Makadi',
  state : 'Evening'
}

wish();

wish(makadi);

function wish({Mame = 'Bharat' , state = ''} ={}){

  console.log(`Goog ${state} ${name}`);
}

