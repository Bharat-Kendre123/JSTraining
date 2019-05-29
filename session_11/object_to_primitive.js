let user={
    name:"Bharat",
};
console.log(!!user);
console.log(Boolean(user));
user=null;
console.log(Boolean(user));//false

user1={
    name:"Bharat",
};
console.log(Number(user1));//NaN
console.log(String(user1));//[object Object]

let user2={
    name:"Krishna"
};
console.log(user1+user2);
user3=user1+user2;
console.log(user3); //[object Object][object Object]
console.log(user2);
for(let key in user3)
console.log(key)   // 0 to 29 intehers displayed on console.

// object to string conversion
user2[user1]="I am User1";  //user1 is a object reference. and [] requires string parameter. It converts object to string
console.log(user2); // { name: 'Krishna', '[object Object]': 'I am User1' }
console.log(typeof user3);// string
user3.name="bharat";  // it doesnot give error for this operation
//console.log('name' in user3); // TypeError: Cannot use 'in' operator to search for 'name' in [object Object][object Object]

//object to number conversion
console.log(Number(user2)); //NaN
console.log(+user2); // NaN 
console.log(user2-user1);//NaN
console.log(user2+user1);// [object Object][object Object]
console.log(user2>user1);// NaN

// Symbol.toPrimitive
let emlployee={
    name:"Bharat KEndre",
    age:10,
    [Symbol.toPrimitive](hint){      // it handles all conversons
        console.log(`Hint is ${hint}`)
        if( hint == "string"){
            return this.name;
        }else{
            return this.age;
        }
    }
};

let ageAddition=10+emlployee; // hint is default
console.log(ageAddition);
console.log(String(emlployee));// Bharat KEndre  -- hint is string
console.log(+emlployee);//10  -- number hint

//toString and valueOf

let emlployee2={
    name:"Bharat KEndre",
    age:10,
    toString:function(){      // it handles all conversons
        return this.name
    },

    valueOf(){
        return this.age;
    }
};


console.log(10+emlployee2); //20   -- default hint 
 console.log(String(emlployee2));// Bharat KEndre  -- hint is string
 console.log(+emlployee2);//10  -- number hint

 // toString  -- if there is no valueOf
 let emlployee3={
    name:"Bharat KEndre",
    age:10,
    toString:function(){      // it handles all conversons
        return this.name
    },

    // valueOf(){
    //     return this.age;
    // }
};


console.log(10+emlployee3); //10Bharat KEndre   -- default hint 
 console.log(String(emlployee3));// Bharat KEndre  -- hint is string
 console.log(+emlployee3);//NaN  -- number hint

// will try to return object from these methods(conclusion -- need to return primitive only)

 let emlployee4={
    name:"Bharat KEndre",
    age:10,
    toString:function(){      // it handles all conversons
        return {}
    },

    // valueOf(){
    //     return this.age;
    // }
};

//console.log(Number(emlployee4));// TypeError: Cannot convert object to primitive value
console.log(Number({}))//NaN
console.log(String(emlployee4)); // Cannot convert object to primitive value
