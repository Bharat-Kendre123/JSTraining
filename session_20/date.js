let date=new Date();
console.log(date); // 2019-05-30T12:21:33.811Z

// Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.

console.log(new Date(100000)); // 1970-01-01T00:01:40.000Z
console.log(date.getTime()); // 1559219099929
console.log(new Date(1559219099929));

console.log(new Date("2013-12-13")); // 2013-12-12T18:30:00.000Z  we can use any separator

// new Date(year, month, date, hours, minutes, seconds, ms)
console.log(new Date(2011, 0, 1, 0, 0, 0, 0)); //2012-12-31T18:30:00.000Z
