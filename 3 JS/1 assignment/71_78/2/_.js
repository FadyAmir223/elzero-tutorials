let myString = "EElllzzzzzzzeroo";

console.log(myString.split('').filter((i, idx, arr) => i !== arr[idx + 1]).join(''));
// Elzero