function wordBeforeLastLength(sentence) {
  let a = sentence.split(' ').filter(i => { return i.length > 1; }),
    b = a[a.length - 2];
  return b ? (a.length == 2 ? b : `${b} => ${b.length}`) : 'False';
}

console.log(wordBeforeLastLength("Elzero Web School")); // Web => 3
console.log(wordBeforeLastLength("Hello Elzero Web School    A ")); // Web => 3
console.log(wordBeforeLastLength("Hello Elzero    Web   School  ")); // Web => 3
console.log(wordBeforeLastLength("Hello")); // False
console.log(wordBeforeLastLength("Hello Elzero")); // Hello
console.log(wordBeforeLastLength("Hello Elzero    A")); // Hello
