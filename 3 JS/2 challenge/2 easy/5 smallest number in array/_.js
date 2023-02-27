function minNumber(a) {
  let min = Number.MAX_SAFE_INTEGER;
  a.forEach(i => { if (typeof i == 'number' && i < min) min = i; });
  console.log(min);
}

// Input
const myArray = [115, 20, 10, "A", "!", "@", 13, 1, 5, 2, "X", "C"];
minNumber(myArray);

// Output
// 1
