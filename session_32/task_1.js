//********************************************************************* */

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

//f.defer(1000);

//************************************************************* */

let user={
    name:`bharat`
};

let employee={
    salary:1000,
    __proto__:user
};

for(let key in employee){
    console.log(key);
}
// salary
// name

console.log('name' in employee); // true
console.log(`toString` in employee); // true
