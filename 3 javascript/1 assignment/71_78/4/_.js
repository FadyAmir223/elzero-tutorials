let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

console.log(numsAndStrings.filter(i => !isNaN(parseInt(i))).map(i => -i));

// [-1, -10, 10, 20, -5, -3]