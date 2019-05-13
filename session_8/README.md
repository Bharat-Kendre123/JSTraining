### Object

1. A variable cannot have a name equal to one of language-reserved words like “for”, “let”, “return” etc. But for an object property, there’s no such restriction. Any name is fine.
2. To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;)
3. “ordered in a special fashion”: integer properties are sorted, others appear in creation order. 
4. The **“integer property”** term here means a string that can be converted to-and-from an integer without a change.
5. if the keys are non-integer, then they are listed in the creation order

### Summary

Objects are associative arrays with several special features.

1. They store properties (key-value pairs), where:
2. Property keys must be strings or symbols (usually strings).
   * Values can be of any type.
   * To access a property, we can use:
3. The dot notation: obj.property.
    * Square brackets notation obj["property"]. Square brackets allow to take the key from a variable, like obj[varWithKey].
Additional operators:
4. To delete a property: delete obj.prop.
5. To check if a property with the given key exists: "key" in obj.
6. To iterate over an object: for (let key in obj) loop.
7. Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object. All operations via copied references (like adding/removing properties) are performed on the same single object.
8. To make a “real copy” (a clone) we can use Object.assign or _.cloneDeep(obj).
9. What we’ve studied in this chapter is called a “plain object”, or just Object.
10. There are many other kinds of objects in JavaScript:
    *  Array to store ordered data collections,
    * Date to store the information about the date and time,
    * Error to store the information about an error. …And so on.
They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.
11. Objects in JavaScript are very powerful. Here we’ve just scratched the surface of a topic that is really huge. We’ll be closely working with objects and learning more about them in further parts of the tutorial.

### code

~~~
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
~~~
