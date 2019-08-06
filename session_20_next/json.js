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