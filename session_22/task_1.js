function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // 0
console.log( counter2() ); // 1

//*******************************************************************************

/* .. your code for inBetween and inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

//array.filter(f)===> f is function

function inBetween(x,y){
    return function(z){
        if(z<=x && z<=y){
            return true;
        }else{
            return false;
        }
    }
}

let arr=[1,2,3,4,5,6];

console.log(arr.filter(inBetween(2,6))); // [ 1, 2 ]



function inArray(t){
    return function(x){
        return t.includes(x);
    }
}

console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr.filter(inArray([2,5,6]))); // [ 2, 5, 6 ]