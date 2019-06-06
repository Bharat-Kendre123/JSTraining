let i = 0;

console.log(" 1 call");
setTimeout(() => console.log(i), 10); // ?
console.log(" 2 call");
// assume that the time to execute this function is >100ms
// for(let j = 0; j < 10000000000; j++) {
//   i++;
// }