### Symbol Type

1. By specification, object property keys may be either of **string** type, or of **symbol** type. Not numbers, not booleans, only strings or symbols, these two types.
2. **“Symbol”** value represents a unique identifier.
3. Symbols are guaranteed to be unique. Even if we create many symbols with the same description, they are different values. The description is just a label that doesn’t affect anything.

### “Hidden” properties

1. Symbols allow us to create “hidden” properties of an object, that no other part of code can occasionally access or overwrite.
2. Imagine that another script wants to have its own “id” property inside user, for its own purposes. That may be another JavaScript library, so the scripts are completely unaware of each other.Then that script can create its own Symbol("id").
3. Symbolic properties do not participate in for..in loop. That’s a part of the general “hiding” concept. If another script or a library loops over our object, it won’t unexpectedly access a symbolic property.
4. In contrast, Object.assign copies both string and symbol properties. There’s no paradox here. That’s by design. The idea is that when we clone an object or merge objects, we usually want all properties to be copied (including symbols like id).
5. Property keys of other types are coerced to strings

### Global Symbols

1. In order to create or read a global symbol in the global registry, use Symbol.for(key).
2. That call checks the global registry, and if there’s a symbol described as key, then returns it, otherwise creates a new symbol Symbol(key) and stores it in the registry by the given key.
3. Symbols inside the registry are called global symbols. If we want an application-wide symbol, accessible everywhere in the code – that’s what they are for.
4. For global symbols, not only Symbol.for(key) returns a symbol by name, but there’s a reverse call: Symbol.keyFor(sym), that does the reverse: returns a name by a global symbol. The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol. So it doesn’t work for non-global symbols. If the symbol is not global, it won’t be able to find it and return undefined.

### System Symbols

1. There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.They are listed in the specification in the [Well-known symbols table](https://tc39.github.io/ecma262/#sec-well-known-symbols).

### Summary
1. Symbol is a **primitive type** for **unique identifiers**.
2. Symbols are created with **Symbol()** call with an **optional description**.
3. **Symbols are always different values, even if they have the same name. If we want same-named symbols to be equal, then we should use the global registry: Symbol.for(key) returns (creates if needed) a global symbol with key as the name. Multiple calls of Symbol.for return exactly the same symbol.**
4. Symbols have two main use cases:
    * “Hidden” object properties. If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be occasionally listed. Also it won’t be accessed directly, because another script does not have our symbol, so it will not occasionally intervene into its actions.So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.

    * There are many system symbols used by JavaScript which are accessible as **Symbol.***. We can use them to alter some built-in behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.

5. Technically, symbols are not 100% hidden. There is a built-in method **Object.getOwnPropertySymbols(obj)** that allows us to get all symbols. Also there is a method named **Reflect.ownKeys(obj)** that returns all keys of an object including symbolic ones. So they are not really hidden. But most libraries, built-in methods and syntax constructs adhere to a common agreement that they are. And the one who explicitly calls the aforementioned methods probably understands well what he’s doing.

### code

~~~

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
~~~
