let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b){

    for(let i=0; i<arr.length; i++){

        if(arr[i]>=a && arr[i]<=b){
            arr.splice(i,1);
            i--;
        }

    }

}

let arr1 = [5, 2, 1, -10, 8];

arr1.sort(compare).reverse();

console.log(arr1)
function compare(a,b){

    console.log(`${a} and ${b}`);

    if (a>b){

        return 1;
    }

    return -1;

}

let arr2 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr2);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr2 );

function copySorted(arr2){

    return [].concat(arr2).sort();
}