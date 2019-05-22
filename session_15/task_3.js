let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

console.log(arr);
 arr[2](); // [ 'a', 'b', [Function] ]


 