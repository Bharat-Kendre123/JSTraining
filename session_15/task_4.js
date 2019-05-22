// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.


//let arr = [1, -2, 3, 4, -9, 6,4,5,6,-1,-2,3,];
let arr=[-1,-2];
console.log(getMaxSubSum());

function getMaxSubSum(){
    let maxValue=0;
    let tempMax=0;
    for(let value of arr){
        
        if(value>0){
            tempMax=tempMax+value;
        }else{
            maxValue=tempMax>maxValue?tempMax:maxValue;
            tempMax=0;
        }
    }
    return maxValue;
}