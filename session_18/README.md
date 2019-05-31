
### Map, Set, WeakMap and WeakSet

#### Map

1. Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
2. unlike objects, keys are not converted to strings. Any type of key is possible.
3. To test values for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.
4. For looping over a map, there are 3 methods:
    * map.keys() – returns an iterable for keys,
    * map.values() – returns an iterable for values,
    * map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
5. The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.
6. Besides that, Map has a built-in forEach method, similar to Array.

#### Set

1. A Set is a collection of values, where each value may occur only once.
2. new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
3. The same methods Map has for iterators are also supported:
    * set.keys() – returns an iterable object for values,
    * set.values() – same as set.keys, for compatibility with Map,
    * set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

#### WeakMap and WeakSet

1. WeakSet is a special kind of Set that does not prevent JavaScript from removing its items from memory. WeakMap is the same thing for Map.
2. Usually, properties of an object or elements of an array or another data structure are considered reachable and kept in memory while that data structure is in memory.
3. For instance, if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it.
4. The first difference from Map is that WeakMap keys must be objects, not primitive values.
5. WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.
6. WeakMap has only the following methods:
    * weakMap.get(key)
    * weakMap.set(key, value)
    * weakMap.delete(key)
    * weakMap.has(key)
7. The idea of WeakMap is that we can store something for an object that should exist only while the object exists. But we do not force the object to live by the mere fact that we store something for it.
8. WeakMap can make things simpler, because it is cleaned up automatically. The information in it like visits count in the example above lives only while the key object exists.
9. WeakSet behaves similarly:
    *  It is analogous to Set, but we may only add objects to WeakSet (not primitives).
    * An object exists in the set while it is reachable from somewhere else.
    * Like Set, it supports add, has and delete, but not size, keys() and no iterations.

### Summary
1. Regular collections: 
    * Map – is a collection of keyed values.
        * The differences from a regular Object:
        * Any keys, objects can be keys.
        * Iterates in the insertion order.
        * Additional convenient methods, the size property.
    * Set – is a collection of unique values.
        * Unlike an array, does not allow to reorder elements.
        * Keeps the insertion order.
2. Collections that allow garbage-collection:
    * WeakMap – a variant of Map that allows only objects as keys and removes them once they become inaccessible by other means.
    * It does not support operations on the structure as a whole: no size, no clear(), no iterations.
    * WeakSet – is a variant of Set that only stores objects and removes them once they become inaccessible by other means.
    * Also does not support size/clear() and iterations.
    * WeakMap and WeakSet are used as “secondary” data structures in addition to the “main” object storage. Once the object is removed from the main storage, if it is only found in the WeakMap/WeakSet, it will be cleaned up automatically.

### Code

~~~

// ********** MAP*************
let map=new Map();
map.set(1,1);
map.set(2,2);
console.log(map);  // Map { 1 => 1, 2 => 2 }
console.log(map.get(1));//1
console.log(map.has(1)); //true
console.log(map.has(3));//false
console.log(map.get(3));//undefined
console.log(map.size);//2
console.log(map.delete(1));//true
console.log(map.size);//1
console.log(map.clear()); // undefined   -- method does not retuen value
console.log(map.size);//0

// object as key

let obj={
    name:"bharat"
};
console.log(map.set(obj,10)); // Map { { name: 'bharat' } => 10 }
console.log(map);   // Map { { name: 'bharat' } => 10 }
console.log(map.set(1,"I am 1")); // Map { { name: 'bharat' } => 10, 1 => 'I am 1' }
console.log(map.set(NaN,"I am NaN")); // Map { { name: 'bharat' } => 10, 1 => 'I am 1', NaN => 'I am NaN' }

// cahining
console.log(map.set(Infinity,"I am Infinity").set(undefined,"I am undefined"));
// Map {
//   { name: 'bharat' } => 10,
//   1 => 'I am 1',
//   NaN => 'I am NaN',
//   Infinity => 'I am Infinity',
//   undefined => 'I am undefined' }

let map1 = new Map(Object.entries({ //Here, Object.entries returns the array of key/value pairs: 
                                    //[ ["name","John"], ["age", 30] ]. That’s what Map needs.
  name: "John",
  age: 30,
  1:"I am one"
}));
console.log(map1); //Map { '1' => 'I am one', 'name' => 'John', 'age' => 30 } 
// all keys will be in string format

// array of [key, value] pairs
let map2 = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

console.log(map2); // Map { '1' => 'str1', 1 => 'num1', true => 'bool1' }

// iteration over map

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterable for keys,
for(let key of recipeMap.keys()){
    console.log(key);  // cucumber tomatoes onion
}

// iterable for values
for(let value of recipeMap.values()){
    console.log(value);  //500 350 50
}

// entries
for(let entry of recipeMap){
    console.log(entry);
}

// [ 'cucumber', 500 ]
// [ 'tomatoes', 350 ]
// [ 'onion', 50 ]

for(let entry of recipeMap.entries()){ // for..of by default use this method
    console.log(entry)
}

// [ 'cucumber', 500 ]
// [ 'tomatoes', 350 ]
// [ 'onion', 50 ]

// map's forech method

recipeMap.forEach((value,key,map)=>console.log(value));  //500 350 50

// *********************** set ****************************

let set=new Set();
console.log(set.add(1)); //{ 1 }
console.log(set.add(2)); //{ 1, 2 }
console.log(set.has(1)); //true
console.log(set.size); //2
console.log(set.delete(1)); //true
console.log(set.size); //1
console.log(set.clear());// undeined
console.log(set.size); //0

let arr=[1,2,3,4,5];
let arrToSet=new Set(arr);  // iterables can be directly converted to set
console.log(arrToSet); // Set { 1, 2, 3, 4, 5 }\
console.log(arrToSet.add(1)); // Set { 1, 2, 3, 4, 5 }

// Iteration over Set
for(let value of arrToSet){
    console.log(value); //1 2 3 4 5
}

// forEach for set
// set.forEach((value, valueAgain, set) => {
//   alert(value);
// });

arrToSet.forEach((value,valueAgain,set)=>console.log(`value is ${value} and valueAgain is ${valueAgain}`));

// value is 1 and valueAgain is 1
// value is 2 and valueAgain is 2
// value is 3 and valueAgain is 3
// value is 4 and valueAgain is 4
// value is 5 and valueAgain is 5

//************** WeakMap and WeakSet******************/

let John={
    name:"John",
    city:"Mumbai",
};

let array=new Array(John);
console.log(array); // [ { name: 'John', city: 'Mumbai' } ]
John=null;  // it will not removes the element from array
console.log(array); // [ { name: 'John', city: 'Mumbai' } ]

let weakMap=new WeakMap();
//weakMap.set(John,"I am John");// TypeError: Invalid value used as weak map key
                              // bcz john is null
console.log(weakMap);  // WeakMap { [items unknown] }
 John={
    name:"John",
    city:"Mumbai",
};
weakMap.set(John,"I'm John");
console.log(weakMap.get(John)); // I'm John


// TASK 1
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // [ 'Hare', 'Krishna', ':-O' ]

// TASK 2

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());


// Error: keys.push is not a function
keys.push("more");
console.log(keys); // [ 'name', 'more' ]

~~~