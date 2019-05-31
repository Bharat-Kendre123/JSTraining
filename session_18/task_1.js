
// TASK 1
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // [ 'Hare', 'Krishna', ':-O' ]

// TASK 2

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());


// Error: keys.push is not a function
keys.push("more");
console.log(keys); // [ 'name', 'more' ]