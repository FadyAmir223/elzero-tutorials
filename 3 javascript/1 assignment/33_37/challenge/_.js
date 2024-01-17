/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

a < 10
  ? console.log(10)
: a >= 10 && a <= 40
  ? console.log("10 To 40")
: a > 40
  ? console.log("> 40")
: console.log("Unknown");

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change
let letter = 'W', letterIndex = st.indexOf(letter);
if (st[`${letterIndex == -1 ? 0 : letterIndex}`].toLowerCase() === "w") {
  console.log("Good");
}

if (!typeof(st) !== "string") {
  console.log("Good");
}

if (typeof(st.length) === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
