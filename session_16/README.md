### Array Methods

##### Add/remove items

1. arr.push(...items) – adds items to the end,
2. arr.pop() – extracts an item from the end,
3. arr.shift() – extracts an item from the beginning,
4. arr.unshift(...items) – adds items to the beginning.

##### splice()

1. The arr.splice(str) method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.
2. Here and in other array methods, negative indexes are allowed. They specify the position from the end of array.

##### slice()

1. It returns a new array containing all items from index "start" to "end" (not including "end"). Both start and end can be negative, in that case position from array end is assumed.

##### concat()

1. It accepts any number of arguments – either arrays or values.
2. If an argument is an array or has Symbol.isConcatSpreadable property, then all its elements are copied. Otherwise, the argument itself is copied.

##### Iterate: forEach

1. The arr.forEach method allows to run a function for every element of the array.
2. The result of the function (if it returns any) is thrown away and ignored.

### Searching in array


1. indexOf/lastIndexOf and includes
    * The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax and do essentially the same as their string counterparts, but operate on items instead of characters.
    * arr.indexOf(item, from) looks for item starting from index from, and returns the index where it was found, otherwise -1.
    * arr.lastIndexOf(item, from) – same, but looks for from right to left.
    * arr.includes(item, from) – looks for item starting from index from, returns true if found.
    * Note that the methods use === comparison. So, if we look for false, it finds exactly false and not the zero.

2. find and findIndex
    * Imagine we have an array of objects. How do we find an object with the specific condition? Here the arr.find method comes in handy.
    * The arr.findIndex method is essentially the same, but it returns the index where the element was found instead of the element itself and -1 is returned when nothing is found.
    * Do not return false. Method automatically consider the false condition if it does not find the true constion.
    
3. filter
    * The find method looks for a single (first) element that makes the function return true.
    * The syntax is similar to find, but filter continues to iterate for all array elements even if true is already returned.
    * Do not return false. Method automatically consider the false condition if it does not find the true constion.

### Transform an array

1. map
    * It returns array of new values instead of items. It depends on method defination actually.

2. sort(fn)
    * The items are sorted as strings by default. Literally, all elements are converted to strings and then compared. So, the lexicographic ordering is applied and indeed "2" > "15".
    * To use our own sorting order, we need to supply a function of two arguments as the argument of arr.sort(). +ve number to represent greater, -ve for lesser and 0 for equal values.
    
3. reverse
    * The method arr.reverse reverses the order of elements in arr.

4. reduce
    * let value = arr.reduce(function(previousValue, item, index, array) {.....}, initial);

5. Array.isArray
    * Arrays do not form a separate language type. They are based on objects.So typeof does not help to distinguish a plain object from an array.
    * But arrays are used so often that there’s a special method for that: Array.isArray(value). It returns true if the value is an array, and false otherwise.

### Summary

##### A cheatsheet of array methods:

1. To **add/remove** elements:
    * push(...items) – adds items to the end,
    * pop() – extracts an item from the end,
    * shift() – extracts an item from the beginning,
    * unshift(...items) – adds items to the beginning.
2. **splice(pos, deleteCount, ...items)** – at index pos delete deleteCount elements and insert items.
3. **slice(start, end)** – creates a new array, copies elements from position start till end **(not inclusive)** into it.
4. **concat(...items)** – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
5. To **search** among elements:
    * **indexOf/lastIndexOf(item, pos)** – look for item starting from position pos, return the index or -1 if not found.
    * **includes(value)** – returns true if the array has value, otherwise false.
    * **find/filter(func)** – filter elements through the function, return first/all values that make it return true.
    * **findIndex** is like find, but returns the index instead of a value.
6. **To iterate over elements:**
    * **forEach(func)** – calls func for every element, does not return anything.
7. **To transform the array:**
    * **map(func)** – creates a new array from results of calling func for every element.
    * **sort(func)** – sorts the array in-place, then returns it.
    * **reverse()** – reverses the array in-place, then returns it.
    * **split/join** – convert a string to array and back.
    * **reduce(func, initial)** – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
8. **Additionally:**
    * **Array.isArray(arr)** checks arr for being an array.
    * Please note that methods sort, reverse and splice modify the array itself.
    * These methods are the most used ones, they cover 99% of use cases. But there are few others:arr.some(fn)/arr.every(fn) checks the array.
    * The **function fn** is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.
    * **arr.fill(value, start, end)** – fills the array with repeating value from index start to end.
    * **arr.copyWithin(target, start, end)** – copies its elements from position start till position end into itself, at position target (overwrites existing).

For the full list, see the [manual](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Code
~~~
// delete property
let temp={
    name:"bharat",
    age:19
};
console.log(temp); // { name: 'bharat', age: 19 }
delete temp.name;
console.log(temp);// { age: 19 }

// The arrays are objects, so we can try to use delete:
let array=[1,2,3,4,5];
delete array[1];
console.log(array); // [ 1, <1 empty item>, 3, 4, 5 ]  --element is removed with undefined value. that we do not want

//splice(index,deletcount,el1,el2,..) --el1,el2.. - insert element list

let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
arr.splice(0,2,-1,-2);
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
arr.splice(2,0,-2,-3); // if delete count is 0 then it just performs insertion operation
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr.splice(-1,0,10,11));
console.log(arr); //[ -1, -2, -2, -3, 3, 4, 5, 6, 7, 8, 10, 11, 9 ]
arr.splice(-0,0,1,2);
console.log(arr);// [ 1, 2, -1, -2, -2, -3, 3, 4, 5, 6, 7, 8, 10, 11, 9 ]

// slice() -- it will not affect the original array
arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr.slice(0,2));//[ 1, 2 ]
console.log(arr); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
 
// concat()  -- it will not affect the original array
arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr.concat(11,12)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

let temp1={
    name:"bahart"
}

console.log(arr.concat(temp1)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, { name: 'bahart' } ]
temp1={
    number:11,
    [Symbol.isConcatSpreadable]: true,
}
console.log(arr.concat(temp1)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// forEach(item,index,array)
arr.forEach(function(item,index,array){
    console.log(`Item ${item} is present at ${index}th position in array ${array}`);
});

// Item 1 is present at 0th position in array 1,2,3,4,5,6,7,8,9,10
// Item 2 is present at 1th position in array 1,2,3,4,5,6,7,8,9,10
// Item 3 is present at 2th position in array 1,2,3,4,5,6,7,8,9,10
// Item 4 is present at 3th position in array 1,2,3,4,5,6,7,8,9,10
// Item 5 is present at 4th position in array 1,2,3,4,5,6,7,8,9,10
// Item 6 is present at 5th position in array 1,2,3,4,5,6,7,8,9,10
// Item 7 is present at 6th position in array 1,2,3,4,5,6,7,8,9,10
// Item 8 is present at 7th position in array 1,2,3,4,5,6,7,8,9,10
// Item 9 is present at 8th position in array 1,2,3,4,5,6,7,8,9,10
// Item 10 is present at 9th position in array 1,2,3,4,5,6,7,8,9,10

// indexOf/lastIndexOf and includes
arr=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,NaN ];
console.log(arr.indexOf(1,2));//-1    1=item,2=start iondex to search item
console.log(arr.indexOf(1));//0
console.log(arr.indexOf(NaN));//-1
console.log(arr.includes(NaN));//true

// arr.find(function(item, index, array)
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user=users.find(item=>item.id==1); 
console.log(user); // { id: 1, name: 'John' }

let index=users.findIndex((item,index)=>{
            if(index<10){
                return true;
            }
});
console.log(index);//-1

// filter

let users1 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users1.filter(item => item.id < 3);

console.log(someUsers.length); // 2
console.log(someUsers); // [ { id: 1, name: 'John' }, { id: 2, name: 'Pete' } ]


// map
let mapArray=["bharat","Kendre","Krishna","Balu","Kailas","makadi"];
let result=mapArray.map(item=>item.length);
console.log(result); // [ 6, 6, 7, 4, 6, 6 ]  Array of lenght of items

// sort  -- default function convert array element into string and reorder them

let sortArray=[1,2,1,3,4,5,6,7,9,16,17];
console.log(sortArray.sort()); // [ 1, 1, 16, 17, 2, 3, 4, 5, 6, 7, 9 ]

// to use our customise the order write our own fuction and pass that to sort function

sortArray=sortArray.sort((first,second)=>first-second);
console.log(sortArray); // [ 1, 1, 2, 3, 4, 5, 6, 7, 9, 16, 17 ]

//reverse method
console.log(sortArray.reverse()); // [ 17, 16, 9, 7, 6, 5, 4, 3, 2, 1, 1 ]


// split

let names = 'Bilbo, Gandalf, Nazgul';
let namesArray=names.split(', ');
console.log(namesArray); // [ 'Bilbo', 'Gandalf', 'Nazgul' ]

console.log(namesArray.join(',')); // Bilbo,Gandalf,Nazgul  -- it joins the array element with provided separator
console.log([1,2,3,4].join(',')); 1,2,3,4

/// if we want to limit the output 
console.log(names.split(', ',2)); // [ 'Bilbo', 'Gandalf' ]
console.log(names.split(""));
// [ 'B', 'i', 'l', 'b', 'o', ',', ' ', 'G', 'a', 'n', 'd', 'a', 'l', 'f', ',', ' ', 'N', 'a', 'z', 'g', 'u', 'l' ]

//reduce  -- it can be used to give a single result after eterating array

array=[1,2,3,4,5];
result=array.reduce((previous,item,index,arr)=>previous+item,0);
console.log(result); // 15
array=[];
result=array.reduce((previous,item,index,arr)=>previous+item,0);
console.log(result); // 0

//result=array.reduce((previous,item,index,arr)=>previous+item);
console.log(result); // Error. TypeError: Reduce of empty array with no initial value

//Array.isArray()  - it decides the type of object is array or not

console.log(Array.isArray([])); // true
console.log(Array.isArray({}));// false
console.log(Array.isArray(1));//false
~~~
