// empty object
let obj=new Object();
console.log(obj); //{} empty object
console.log( {} );// {} empty object

 obj={
name:"bharat",
age:10
 };
 console.log(obj); // { name: 'bharat', age: 10 }

 // accessing properties
 console.log("Name -"+obj.name+" age -"+obj.age); // Name -bharat age -10

 //remove property from object we use delete operator
 delete obj.age;
 console.log(obj); //{Name -bharat age -10}

 //multiword property name
let x={
    "officer name":"bharat kendre"
};
console.log(x["officer name"]);
console.log(obj["name"]);

// Computed properties - dyanamic property name we can add in object
let y="name";
let temp={
    [y]:"Makadi ",
}
console.log(temp.name);

// test
 y=1;
temp={
    [y]:"Makadi ",
}
console.log(temp[1]);


 obj = {};
obj.__proto__ = 5;
console.log(obj.__proto__);

// object properties assigment wat
let name="bharat";
let age=10;
console.log( {name,age} ); // { name: 'bharat', age: 10 }
console.log( {name,age:11} ); //{ name: 'bharat', age: 11 }

// There also exists a special operator "in" to check for the existence of a property.
let obj1={
    name,age
}
console.log(undefined==obj1.salary);//property does not exist
console.log("salary" in obj1);// false
console.log("age" in obj1);//true

//undefined check failes if object property holds undefined type value
obj1.salary=undefined;
console.log(obj.salary==undefined); //true - it says property is not present but it is there
console.log("salary" in obj1);//true

// for in loop to iterate object

for(let key in obj1)
{
    console.log(key);           
    console.log(obj1[key]);
}

// order of accessing property
obj1={
    "1":1,
    "3":3,
    "0":0,
}

for(let key in obj1)
{
    console.log(key);
}
obj1["-1"]=-1;
console.log("---------------");
for(let key in obj1)
{
    console.log(key);  //0,1,3,-1
}
console.log("---------------");
obj1[2]="2";
for(let key in obj1)
{
    console.log(key);//0,1,2,3,-1
}

// Object.assignement

console.log(Object.assign({},obj1)); // { '0': 0, '1': 1, '2': '2', '3': 3, '-1': -1 }

let user={};
temp=Object.assign(user,obj1);
console.log("user- "+user); // user- [object Object]
console.log("temp- "+temp);//user- [object Object]
console.log(user); //{ '0': 0, '1': 1, '2': '2', '3': 3, '-1': -1 }
console.log(temp);//{ '0': 0, '1': 1, '2': '2', '3': 3, '-1': -1 }

//task
