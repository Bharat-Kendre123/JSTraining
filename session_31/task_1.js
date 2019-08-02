//***************************TASK1 */
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit.eats ); // true

// The assignment to Rabbit.prototype sets up [[Prototype]] for new objects, but it does not affect the existing ones.

//***************TASK2 ************************************** */

function Rabbit2() {}
Rabbit2.prototype = {
  eats: true
};

let rabbit2 = new Rabbit2();

Rabbit2.prototype.eats = false;

console.log( rabbit2.eats ); // false

//*******************************TASK 3******************************** */

function Rabbit3() {}
Rabbit3.prototype = {
  eats: true
};

let rabbit3 = new Rabbit3();

delete rabbit3.eats;

console.log( rabbit3.eats ); // true

//********************************TASK 4************************************ */

function Rabbit4() {}
Rabbit4.prototype = {
  eats: true
};

let rabbit4 = new Rabbit4();

delete Rabbit4.prototype.eats;

console.log( rabbit4.eats ); // undefined

//****************************TASK 5******************************************** */

function User(){};

let user1=new User();

let user2=new user1.constructor();