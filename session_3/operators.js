// unary operator
console.log(-1);//-1
console.log(+-1);//-1  + and - both are unary operator
console.log(-+1);//-1
console.log(+"");//0   +""=>Number("")
console.log(+"abv")//NaN
console.log(+undefined)//NaN
console.log(+null)//0

// exponentiation 
console.log(2**3);//8  (2*2*2)  **=>^
console.log(+-2); //-2
//console.log(++2);//error ++/-- => applicale only for variables

///comma operator
console.log((1 + 2, 3 + 4));//7  --will return  last value 
