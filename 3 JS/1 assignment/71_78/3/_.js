let myArray = ["E", "l", "z", ["e", "r"], "o"];

console.log(myArray.reduce((acc, i) => Array.isArray(i) ?
           acc += i.reduce((acc, i) => acc += i) : 
           acc += i));

// Elzero