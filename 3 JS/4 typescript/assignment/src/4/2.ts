// Write Function Code Here
function showTypes <A = {}, B = {}, C = {}> (x? : A, y? : B, z? : C) : string {
  return `${x || 'Nothing'} - ${y || 'Nothing'} - ${z || 'Nothing'}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true