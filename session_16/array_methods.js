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

