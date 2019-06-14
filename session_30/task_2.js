let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();  // rabbit

//*******************************TASK 3***************************** */

let hamster = {
  // stomach: [],
  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = { stomach: [],
  __proto__: hamster
};

let lazy = {
     stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple