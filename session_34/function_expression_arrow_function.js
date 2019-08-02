 // Function Expression

 let sayHi = function() {
   console.log('Hey Bharat');
  };

  sayHi(); // Hey Bharat

  console.log(sayHi);  // [Function: sayHi]

  // Arrow function
  let func = (arg1, arg2, ...argN) => expression


  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
   () =>  console.log("You agreed."),
    () =>console.log("You canceled the execution.")
  );
  

  function confirm(x){

    true
  }