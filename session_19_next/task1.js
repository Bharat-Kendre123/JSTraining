let user = {
    name: "John",
    years: 30
  };

  let {name, years : age, isAdmin = true} = user;

  console.log(`name - ${name}, age = ${age}, isAdmin - ${isAdmin}`);
  //  name - John, age = 30, isAdmin - true
  // -----------------------------------------------------------------------------

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  console.log(topSalary(salaries));  // pete

  function topSalary(salaries){

    if(salaries === undefined || salaries === null)
        return null;

    let isEmpty = true
    for(let key in salaries){
        isEmpty = false;
        break;
    }

    if(isEmpty){
        return null;
    }


    let tempSalary = 0;
    let tempName = "";
    for(let [name, salary] of Object.entries(salaries)){

        if(tempSalary < salary){
            tempName = name;
            tempSalary = salary;
        }

    }

    return tempName;
  }
