function checkAge(age) {
    

      return age > 18 ?true : cconfirm('Did parents allow you?');
  }

  function cconfirm(permission){
    console.log(`Taking parents permission`);
    return true;
  }
  console.log(checkAge(15));

  let obj = new Object();
  console.log(obj);
  obj.name = 'Bharat';
  console.log(obj);
  
  let temp = {};


function isObjectEmpty(obj){

    for(let key in obj){

        return false;
    }

    return true;
}


// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  console.log(menu);
  multiplyNumeric(menu);
  



  function multiplyNumeric(menu){

    for(let key in menu){
        if (typeof menu[key] == 'number'){
            console.log(typeof menu[key]);
            menu[key] = menu[key] *2;
        }
    }
  }

  console.log(menu);

  console.log("--------------------------------------------------------------");

  let id = Symbol('Id');
  console.log(id);
  let user = {
    [id] : "bharat"
  };

  console.log(user);

  console.log(user[id]);

  // A function that is the property of an object is called its method.

  function sayHi(){
    console.log("Hey Bharat. You are very slow");
  }

  user.hi = sayHi;

  user.hi();

// -----------------------------------------------------
  // method shorthand looks better, right?
user1 = {
  sayHi() { // same as "sayHi: function()
    console.log("Hello");
  }
};


user1.sayHi(); // Hello
// ---------------------------------------------------------

function sum(){
  console.log(this.a);
}

let sumObj = {
  a:10,
  b:20
};

sum();

console.log("------------------------------------------------");

function Test(){
  if(!new.target){
    console.log('target is empty - ' +new.target);
  }else{
    console.log('target is ' +new.target);
  }
}

Test();

//---------------------------------------------------------
let str = "Hello";

str.test = 5;

console.log(str.test);

//----------------------------------

let number = 10;
console.log(number.toString(2))

//--------------------
console.log(0 === -0); // true
console.log(Object.is(0,-0)); // false


let str1 = 'Bharat';
str1[0] = 's';  //no error but change also ignored

let arr = [];
arr[0] = 1;
console.log(arr)
console.log(str1);
console.log(arr.push(2));
console.log(arr)
console.log(arr.shift())
console.log(arr);
console.log('hi -'+arr.unshift(5))
console.log(arr)

console.log(Object.assign([],arr));
let m = arr;
console.log(Object.is(m,arr));
m[3]=4;
console.log(Object.is(m,arr));

