let array=["Jazz", "Blues"];
array.push("Rock-n-Roll");
console.log(replaceMiddleValue(array)); //[ 'Jazz', 'classic', 'Rock-n-Roll' ]
console.log(array.shift()); //Jazz
console.log(array.unshift("Rap", "Reggae",));//4
console.log(array); // [ 'Rap', 'Reggae', 'classic', 'Rock-n-Roll' ]









function replaceMiddleValue( array)
{
    if(array.lenght%2!=0)
    {
        
        array[Math.floor((array.length-1)/2)]="classic"
        return array;
    }else{
        return array;
    }
}