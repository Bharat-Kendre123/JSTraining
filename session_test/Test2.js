let user = {
    name : 'bharat',
    age  : 27
};

user = 'Bharat';

for (let value of user){
    console.log(value);
}

for(let key in user){
    console.log(key);
}


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let arr2 = [1, 2, 3, 4, 5];

for(let key in arr2){
    console.log(key);
}
console.log(String(arr2));


let arr3= ["a", "b"];

arr3.push(function() {
  console.log( this );
})

arr3[2](); // "a","b",function

let user2 = {

    name : 'bharat',

    getName(){
        return this.name;
    }
};


console.log(user2.getName());
console.log(user2['getName']());


[1,2,3,4].forEach( (item, index, array1) => console.log(`index ${index} - item ${item}`)
)

console.log([1,2,3,4].findIndex(item => false));


console.log([1,2,3,4].find(item => false));


let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

  let newUser = users.filter(() =>true);

  console.log(newUser)

  
 newUser = users.filter((item) =>{
        if(item.id == 1 || item.id == 3){
            return true;
        }
 });

 
 console.log(newUser)

 console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

 
console.log([1,2,3,4].find(item => false));


 
console.log([1,2,3,4].map(item =>{

    false
}));

function compare(a,b){

    console.log(`${a} and ${b}`);

    if (a>b){

        return 1;
    }

    return -1;

}

console.log([2,0,3,21, -1,4].sort(compare));

console.log("list-style-image".split('-').map((item, index, arr)=>{
    return item[0].toUpperCase() + item.slice(1);
}).join(''))

