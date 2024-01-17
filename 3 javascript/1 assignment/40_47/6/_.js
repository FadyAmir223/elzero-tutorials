let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1.pop(), arr2.pop(), arr2.pop()).sort().join('').toLowerCase();
console.log(allArrs); // fxy
