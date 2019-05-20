//According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

//task 1
console.log(1.35.toFixed(20));//6.34999999999999964473
console.log(1.35.toFixed(1));//1.4
console.log(6.35.toFixed(1));//6.3
console.log(6.35.toFixed(20));//6.34999999999999964473
console.log(Math.round(6.35));//6


// task 2
// let i = 0;
// while (i != 10) {
//   i += 0.2;
//   console.log(i);
// }

//task 3
console.log(Math.random());