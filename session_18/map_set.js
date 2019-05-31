
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