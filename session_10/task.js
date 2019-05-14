// task 1

let user = {
  name: "John",
  go: function() { console.log(this.name) }
};  // added semicolne to run the script

(user.go)(); // error - JavaScript does not assume a semicolon before a bracket (user.go)(), so it reads the code like let user = { go:... }(user.go)()

/* Please note that brackets around (user.go) do nothing here. Usually they setup the order of operations, but here the dot . 
works first anyway, so there’s no effect. Only the semicolon thing matters. */

// task 2

let obj, method;

obj = {
  go: function() { console.log(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined


// tsak 3

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user1 = makeUser();
console.log( user1.ref.name ); // What's the result? -undefined


// task 4

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;  // return statement added to complete the task
  },
  down() {
    this.step--;
    return this; // return statement added to complete the task
  },
  showStep: function() { // shows the current step
    console.log( this.step );
  }
};

ladder.up().up().down().showStep();

