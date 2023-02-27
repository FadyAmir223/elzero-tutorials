function yesOrNo(val: number | boolean) : "True" | "False" {
  if (val > 10) return "True"
  else return "False"
}

// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False