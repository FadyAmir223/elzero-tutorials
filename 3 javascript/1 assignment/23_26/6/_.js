let flt = 10.4;

console.log(Math.ceil(flt) - Number.isFinite(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10
