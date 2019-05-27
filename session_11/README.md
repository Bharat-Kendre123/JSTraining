### Object to primitive conversion

1. **All objects are true** in a **boolean context**. There are only **numeric** and **string** conversions.
2. The **numeric conversion** happens when we **subtract objects or apply mathematical functions.** For instance, Date objects (to be covered in the chapter Date and time) can be subtracted, and the result of date1 - date2 is the time difference between two dates.
3. As for the string conversion – it usually happens when we output an object like alert(obj) and in similar contexts.
4. **default hint** Occurs in rare cases when the **operator is “not sure”** what type to expect.
5. **The greater/less operator <> can work with both strings and numbers too. Still, it uses “number” hint, not “default”. That’s for historical reasons.**
6. In practice, all built-in objects except for one case (Date object, we’ll learn it later) implement "default" conversion the same way as "number". And probably we should do the same.
7. There are only three hints. It’s that simple. There is no “boolean” hint (all objects are true in boolean context) or anything else. And if we treat "default" and "number" the same, like most built-ins do, then there are only two conversions.

#### ToPrimitive

1. The conversion algorithm is called ToPrimitive in the specification. It’s called with a “hint” that specifies the conversion type.
2. There are three variants: "string","number" and "default".
3. To do the **conversion**, JavaScript tries **to find and call three object methods**:
    * Call **obj[Symbol.toPrimitive]** **(hint)**] if the method exists,
    * Otherwise if **hint** is **"string"**
        *  try **obj.toString()** and **obj.valueOf()**, whatever exists.
    * Otherwise if **hint** is **"number"** or **"default"**
        * try obj.valueOf() and obj.toString(), whatever exists.
4. Symbol.toPrimitive
    * There’s a **built-in symbol** named **Symbol.toPrimitive** that should be used to name the conversion method.
    * obj[Symbol.toPrimitive] = function(hint) {----return premitive value}
        * here hint is one of the string,number or default
    * If there’s no **Symbol.toPrimitive** then JavaScript tries to find them and try in the order:
        * toString -> valueOf for “string” hint.
        * valueOf -> toString otherwise.
    * Often we want a single “catch-all” place to handle all primitive conversions. In this case we can implement toString only
5. The important thing to know about all primitive-conversion methods is that they do not necessarily return the “hinted” primitive. There is no control whether toString() returns exactly a string, or whether Symbol.toPrimitive method returns a number for a hint “number”. The only mandatory thing: these methods must return a primitive, not an object.

### Summary

1. The **object-to-primitive conversion** is called automatically by many **built-in functions and operator**s that **expect a primitive as a value.**
2. here are **3 types (hints)** of it:
    * **"string"** (for alert and other string conversions)
    * **"number"** (for maths)
    * **"default"** (few operators)
3. The specification describes explicitly which operator uses which hint. There are very few **operators** that **“don’t know what to expect”** and use the **"default"** hint. Usually for built-in objects "default" hint is handled the same way as "number", so in practice the last two are often merged together.
4. The conversion algorithm is:
    * Call **obj[Symbol.toPrimitive]** **(hint)** if the method exists,
    * Otherwise if **hint is "string"**
        * try **obj.toString()** and **obj.valueOf()**, whatever exists.
    * Otherwise if **hint is **"number"** or **"default"**
        * try obj.valueOf() and obj.toString(), whatever exists.
5. In practice, it’s often enough to implement **only obj.toString()** as a “catch-all” method for all conversions that return a “human-readable” representation of an object, for **logging or debugging purposes.**

### Code

~~~
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

~~~















