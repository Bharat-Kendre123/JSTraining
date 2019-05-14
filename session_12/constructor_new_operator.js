function User(name)
{
    console.log(new.target);  // new.target -it is used to decide it is constructor call or normal call
    this.name=name;             // for normal call it has undefined value and for constructor call it has value
    this.sayHi=function(){
        console.log("Hi "+this.name);
    };
}

let user1=new User("Bharat");
let user2=new User("Krishna");
console.log(user1.name);//Bharat
console.log(user2.name)//Krishna
User("Balu");
let user3=new User;
console.log(user3.name);//undefined
user2.sayHi(); // Hi Krishna

