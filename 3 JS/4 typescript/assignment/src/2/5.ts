type custom = "Yes" | "No";

function isHeOld(age: number | string[]) : custom | number {
  if (age > 40) return "Yes";
  else return "No";
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"