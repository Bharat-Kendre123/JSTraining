// logical OR operator

var x=2,y=3;
console.log(x||y);//2 returns always first truthy value
console.log("" || null|| "Hi Bharat");//"Hi Bharat" 
console.log("" || undefined || "" || 5 || null);//5
console.log("" || undefined || "" || null);// null   =>if all operands are false it returns last operand
let m;
console.log("" || "bharat" || (m=3)); // assigment will not happen
console.log("value of m is  =>"+m);

// logical AND operator
console.log("" && 3);//""
console.log(null && 3)//null
console.log(2 && 3)//3

//Logical operator AND has higher precedence than Logical OR
console.log(2 || 3 && 4); //2
console.log(2 && 3 || 4);//3
console.log(2 && null || 4);// 4

//Logical Not(!) operator

console.log(!3);//false
console.log(!!3);//true
