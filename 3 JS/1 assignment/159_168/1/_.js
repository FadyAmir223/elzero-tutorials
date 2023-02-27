let now = new Date();
let birth = new Date('8 4 99');
let age = now - birth;

s = (age / 1000).toFixed();
m = (s / 60).toFixed();
h = (m / 60).toFixed();
d = (h / 24).toFixed();
n = (d / 30).toFixed();
y = (d / 365).toFixed();

console.log(`${s} Seconds`);
console.log(`${m} Minutes`);
console.log(`${h} Hours`);
console.log(`${d} Days`);
console.log(`${n} Months`);
console.log(`${y} Years`);

// Needed Output
"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"