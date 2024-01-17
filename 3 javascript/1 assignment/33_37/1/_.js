let num = 9; // "009"
// let num = 20; // "020"
// let num = 110; // "110"

let numDigits = num.toString().length;
numDigits === 1
  ? console.log(`00${num}`)
  : numDigits === 2
    ? console.log(`0${num}`)
  : console.log(num.toString());
