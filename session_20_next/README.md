#### JSON methods, toJSON

1. But in the process of development, new properties are added, old properties are renamed and removed. Updating such toString every time can become a pain. We could try to loop over properties in it, but what if the object is complex and has nested objects in properties? We’d need to implement their conversion as well.
2. JSON.stringify to convert objects into JSON.
3. JSON.parse to convert JSON back into an object.
4. The method JSON.stringify(student) takes the object and converts it into a string. The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. We are ready to send it over the wire or put into a plain data store.
5. JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.
Namely:
    * Function properties (methods).
    * Symbolic properties.
    * Properties that store undefined.

##### Excluding and transforming: replacer
    
1. The full syntax of JSON.stringify is: let json = JSON.stringify(value[, replacer, space])


##### Custom “toJSON”

1. Like toString for string conversion, an object may provide method toJSON for to-JSON conversion. JSON.stringify automatically calls it if available.


#### Summary
1. JSON is a data format that has its own independent standard and libraries for most programming languages.
2. JSON supports plain objects, arrays, strings, numbers, booleans, and null.
3. JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
4 Both methods support transformer functions for smart reading/writing.If an object has toJSON, then it is called by JSON.stringify.


### Code

~~~

let user = {
    name: "John",
    age: 30,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };
  
console.log(user); // { name: 'John', age: 30, toString: [Function: toString] }
console.log(user.toString()); // {name: "John", age: 30}
 
// --------------------------------------------------------------------------------------------

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };

  let json = JSON.stringify(student);
  console.log(json); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}

  console.log(typeof(json)); // string

  // supports below objects as well

console.log( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
console.log( JSON.stringify('test') ) // "test"

console.log( JSON.stringify(true) ); // true

console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]

// skips java script specific properties

let emp = {

    sayHello(){
        console.log(`Hello`);
    },

    [Symbol('id')] :100
}

console.log(JSON.stringify(emp)); //{}

console.log('-------------------------------------------------------------------');

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };

  console.log(JSON.stringify(meetup, ['title'])); // {"title":"Conference"}

  console.log(JSON.stringify(meetup, ['title', 'name'])); // {"title":"Conference"}

  console.log(JSON.stringify(meetup, (key,value) => key == 'participants' ? undefined : value));

  // {"title":"Conference","place":{"number":23}}

  console.log(JSON.stringify(meetup, null,2));

//   {
//     "title": "Conference",
//     "participants": [
//       {
//         "name": "John"
//       },
//       {
//         "name": "Alice"
//       }
//     ],
//     "place": {
//       "number": 23
//     }
//   }

console.log('-------------------------------------------------------------------');
let employee = {

  eName : 'Bharat Kendre',
  eAge : 20,
  company : 'Travelex Worldwide',

  address :{
    toJSON(){

      return "KKK"; 
  
    }
  }
  
};

console.log(JSON.stringify(employee, null, 1));

// {
//   "eName": "Bharat Kendre",
//   "eAge": 20,
//   "company": "Travelex Worldwide"
//  }
console.log(JSON.stringify(employee, ['eAge'] , 1));
// {
//   "eAge": 20
//  }

console.log(JSON.stringify(employee, (key, value) => key == 'eAge' ? undefined : value));
// {"eName":"Bharat Kendre","company":"Travelex Worldwide"}

console.log(JSON.stringify(employee, (key, value) => key == 'eAge' ? undefined : value,2));

// {
//   "eName": "Bharat Kendre",
//   "company": "Travelex Worldwide"
//  }

// JSON.parse()

let arr = "[1,2,3,4,5,6,6,7,8,97]";

let newArray = JSON.parse(arr, (key, value) => {
        console.log(`key - ${key} and value - ${value}`)
        return value*value;
}
        );

        console.log(newArray);
console.log(Array.isArray(newArray)); // true
console.log(newArray);

let str = '{"eName":"Bharat Kendre","company":"Travelex Worldwide","address":"KKK"}';

console.log(JSON.parse(str));

// { eName: 'Bharat Kendre',
//   company: 'Travelex Worldwide',
//   address: 'KKK' }

let str1 = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let newStr1 = JSON.parse(str1);
console.log(newStr1);
// { title: 'Conference', date: '2017-11-30T12:00:00.000Z' }
console.log(JSON.parse(str1, (key, value) => key == 'date' ? new Date(value) : value));
//{ title: 'Conference', date: 2017-11-30T12:00:00.000Z }

~~~