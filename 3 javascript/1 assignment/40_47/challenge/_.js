/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my = my.reverse().slice(--counter);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(--counter, -counter)); // ["Elham", "Mazero"]

console.log(my[counter++].slice(zero, counter) + my[counter++].slice(counter--)); // "Elzero"

// console.log(my[--counter].slice(-counter)); // "rO"
console.log(my[counter++][++counter] + 
    my[--counter + my.indexOf('')][--counter + my.indexOf('') + my.length].toUpperCase()); // "rO"
