let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(parseInt(Math.min(a, b, c ,d)))

console.log(a ** parseInt(d))

console.log(Math.round(d))
console.log(parseInt(d))
console.log(Math.floor(d))
console.log(Math.trunc(d))

console.log((parseInt(b) / Math.ceil(d)).toString())
console.log(Math.ceil(parseInt(b) / Math.ceil(d)))
