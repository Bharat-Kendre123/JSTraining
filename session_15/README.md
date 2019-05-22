### Array

1. **An array is a special kind of object.** The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.
2. The **for..in** loop is optimized for generic objects, not arrays, and thus is **10-100 times slower.** Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference. **Generally, we shouldn’t use for..in for arrays.**
3. The **length property** automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but **the greatest numeric index plus one.** Another interesting thing about **the length property is that it’s writable. So, the simplest way to clear the array is: arr.length = 0;**
4. If **new Array()** is called with a single argument which is a number, then it creates an array without items, but with the given length. To evade such surprises, we usually use square brackets, unless we really know what we’re doing.
5. Arrays have their own implementation of **toString** method that returns a comma-separated list of elements.
6. Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".

### Summary

1. Array is a special kind of object, suited **to storing and managing ordered data items**.
2. The length property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods.
3. **If we shorten length manually, the array is truncated.**
4. We can use an array as a deque with the following operations:
    * push(...items) adds items to the end.
    * pop() removes the element from the end and returns it.
    * shift() removes the element from the beginning and returns it.
    * unshift(...items) adds items to the beginning.
5. To loop over the elements of the array:
    * for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
    * for (let item of arr) – the modern syntax for items only,
    * for (let i in arr) – never use.

### code

~~~
// empty array creation
let array1=new Array();
let array2=[];

//pop() --  removes lement from last
array2=["bharat","krishna","balu","kailas","santosh"];
console.log(array2.pop());//santosh
console.log(array2.length + " "+array2); //4 bharat,krishna,balu,kailas

//push()  -- apend the element to end of the array
console.log(array2.push("santosh"));// returns length of array
console.log(array2);// [ 'bharat', 'krishna', 'balu', 'kailas', 'santosh' ]
console.log(array2.push("papu","bhalu")); //7
console.log(array2); // [ 'bharat', 'krishna', 'balu', 'kailas', 'santosh', 'papu', 'bhalu' ]

// shift() -- rmoves the first element
console.log(array2.shift());//bharat
console.log(array2); // 

//unshift() -- add tyhe lement to the begining of the array
console.log(array2.unshift("bharat")); // 5
console.log(array2); // [ 'bharat', 'krishna', 'balu', 'kailas', 'santosh' ]
console.log(array2.unshift("KEndre","gutte"));// ["KEndre","gutte", 'bharat', 'krishna', 'balu', 'kailas', 'santosh', 'papu', 'bhalu' ]
console.log(array2);//9

// how to make array to normal obj
array2.name="bharat";
for(let key in array2)
{
    console.log(key);
}

console.log(array2); // [ 'KEndre',  'gutte',  'bharat', 'krishna',  'balu',  'kailas',  'santosh', 'papu', 'bhalu',  name: 'bharat' ]

console.log(array2.unshift(" "));//10
console.log(array2);
console.log("array lenght -"+array2.length);//array lenght -10  -- it does not count non array element

// normal obj
let temp={name:"bharat",
    age:10,
};

 console.log(temp); //{ name: 'bharat', age: 10 }

 array2[10]="I am 10";
 console.log(array2);
 array2[100]="I am 100";
 console.log(array2); // [ ' ','KEndre','gutte','bharat','krishna','balu','kailas','santosh','papu','bhalu','I am 10'<89 empty items>,'I am 100',name: 'bharat' ]
 console.log(array2.length); //101
 // to access arrays key we can also use for in loop. for in loop designed for object iteration and aray is also object
 for(let key in array2){ 
     console.log(key);    // 1 to 10 and 100, name
 }

 // The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.
for(let value of array2){
    console.log(value);   // all values will be printed includeing the empty values(undefined)
}

// Another interesting thing about the length property is that it’s writable.
console.log(array2.length); //101
array2.length=1;
console.log(array2); //[ ' ', name: 'bharat' ]

// new Array()
let array3=new Array(); // empty array
array3=new Array(2); // array size 2
console.log(array3);// [ <2 empty items> ]
array3=new Array(1,2);
console.log(array3); // [ 1, 2 ]

// multi-dimentional array
array3=[
    [1,2,3],
    [4,5,6]
];
console.log(array3); //[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
console.log(array3[0][0]);//1
console.log(array3.toString); //[Function: toString]
console.log(String(array3));//1,2,3,4,5,6
console.log("string"==typeof String(array3)); // true

// array as string
console.log([] + "1");
console.log([1,2]+3);//1,23
~~~