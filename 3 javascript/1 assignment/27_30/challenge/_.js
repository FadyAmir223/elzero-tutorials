let a = "Elzero Web School";

// slice & charAt
console.log(a[2].toUpperCase() + a.slice(3, 6)); // Zero

console.log(a.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH

console.log(a.substring(0, 7)); // [Elzero]

// only substr + template literals
console.log(`${a.substr(0, 6)} ${a.substr(11)}`); // Elzero School

// global solution
console.log(
  `${a[0].toLowerCase()}${
     a.substring(1, a.length - 1).toUpperCase()}${
     a[a.length - 1].toLocaleLowerCase()}`
); // eLZERO WEB SCHOOl
