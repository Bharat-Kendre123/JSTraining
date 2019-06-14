//  partial function application

function mult(a,b){
   // console.log(this);
    console.log(a*b);
}

let double=mult.bind(null,2);
double(); //NaN
double(1);//2

// Why do we usually make a partial function?

// The benefit is that we can create an independent function with a readable 
//name (double, triple). We can use it and not provide first argument of every 
//time as it’s fixed with bind.

//************************************************************************************* */

//Going partial without context

function wrapper(func,firstArgument){

   return function (secondArgument){
        // func(firstArgument,secondArgument)
        func.call(this,firstArgument,secondArgument)
    }
}

let double2=wrapper(mult,2);
double2(3); //6

console.log(this);

// ***************************************************************************************************

function run(){
    this.name=`bharat`;
    console.log(`Context :- ${this}`);
}

run(); // Context :- [object global]

let temp=new run();
console.log(temp);


// Context :- [object global]
// Context :- [object Object]
// run { name: 'bharat' }

//********************************************************************************************** */
