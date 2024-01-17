let x = new Date(0);
x.setFullYear(x.getFullYear() + 10);
x.setHours(0);
x.setSeconds(1);
console.log(x);

// Needed Output
"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"