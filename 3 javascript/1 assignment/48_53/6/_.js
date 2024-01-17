let start = 0;
let swappedName = "elZerO";

let arr = [];
for (let i of swappedName) {
    if (i === i.toLocaleLowerCase()) arr.push(i.toUpperCase());
    else arr.push(i.toLowerCase());
}
console.log(arr.join(''));


// Output
// "ELzERo"