function checkNumber(num, arr) {
  arr.indexOf(--num) !== -1 && arr.indexOf((num += 2)) !== -1
    ? console.log(`True => ${(num -= 2)} | ${++num} | ${++num}`)
    : console.log("False");
}

let arrayOfNumbers = [1, 2, 4, 10, 20, 12];
checkNumber(11, arrayOfNumbers); // True => "10 | 11 | 12"
checkNumber(3, arrayOfNumbers); // True => "2 | 3 | 4"
checkNumber(5, arrayOfNumbers); // False
