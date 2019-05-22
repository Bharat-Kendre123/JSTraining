
let id= Symbol("first"); // Symbol(first)  => description is optional
console.log(id);
id=Symbol("second"); //local symbol
console.log(id);//Symbol("First ID")
console.log(id.toString); //[Function: toString]
console.log(id.description);//undefined

// symbol as a key 
let user={
    name:"bharat",
    age:10,
};
user[id]=10000;
console.log(user); //{ name: 'bharat', age: 10, [Symbol(First ID)]: 10000 }
id=Symbol("third");
user[id]=5000;
console.log(user);
console.log(user[id]);


// If we want to use a symbol in an object literal, we need square brackets.
id=Symbol("fourth");
let user2={
    name:"kendre",
    [id]:10
};
console.log(user2); //{ name: 'kendre', [Symbol(fourth)]: 10 }


//Symbolic properties do not participate in for..in loop.
for(let key in user2){
    console.log(key); // name   => In for in loop we won't get key for symbol
}

// In contrast, Object.assign copies both string and symbol properties:
let user3=Object.assign({},user2);
console.log(user3);// { name: 'kendre', [Symbol(fourth)]: 10 }  

// We can only use strings or symbols as keys in objects. Other types are converted to strings.
let user4={
    1:"bharat"
};
console.log(user4[1]); // "bharat"
console.log(user4["1"]);//"bharat"

//Global symbols
let x=Symbol.for("key1");
let y=Symbol.for("key1");
console.log(x==y); // true
console.log(x==Symbol("key1"));//false  not checking in global repo. directly creating

// Symbol.keyFor() - returns name usinf variable name. Don't work for local symbols
console.log(Symbol.keyFor(x));//key1
let z=Symbol("key2");
console.log(Symbol.keyFor(z));//undefined

//task
let globalObj={
    name:"bharat",
    age:10,
}
addSalary();
addSirname();
function addSalary()
{
let id1=Symbol("id1");
globalObj[id]=1000;
console.log(globalObj);
}

function addSirname()
{
    console.log("In AddSirnameMethod");
    console.log(globalObj);
    let id2=Symbol("id2");
    globalObj[id2]="Kendre";
    console.log(globalObj);
}
/* { name: 'bharat',
  age: 10,
  [Symbol(fourth)]: 1000,
  [Symbol(id2)]: 'Kendre' } 
  */