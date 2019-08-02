let animal={
    eats:true
};


function Rabbit2(name){

    this.name=name;

}

Rabbit2.prototype=animal;

let rabbit=new Rabbit2("pagal");

console.log(rabbit.eats); // true

Rabbit2.prototype=null;

let rabbit2=new Rabbit2("mad");

console.log(rabbit.eats); // true
console.log(rabbit2.eats); // undefined

//*************************************************************************** */

function User(){}
console.log(User.prototype);  // User {}
console.log(User.prototype.constructor == User);// true

let user2=new User.prototype.constructor();

console.log(user2); // User {}  

//************************************************************************** */

function Rabbit2() {}
Rabbit2.prototype = {
  jumps: true
};

let rabbit3 = new Rabbit2();
console.log(rabbit.constructor === Rabbit2); // false

// So, to keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:

function Computor(){
    this.keyBoard=true;
    this.isTouchmouse=false;

}

Computor.prototype.constructor=Computor;
