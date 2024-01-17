// no numbers | true | false | index | loop | fn
// one line
// .length | * | set | ... | Math

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...[...n1]) * [...n1, ...n2].length);
console.log(+`${n2.indexOf(Math.min(...n2))}${Math.min(...n2)}`);

// Needed Output
210;
