let user={
    name:"Bharat",
};
console.log(!!user);
console.log(Boolean(user));
user=null;
console.log(Boolean(user));//false

user={
    name:"Bharat",
};
console.log(Number(user));//NaN
console.log(String(user));//[object Object]
