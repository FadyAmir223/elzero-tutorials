let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

console.log(mix.map(i => isNaN(parseInt(i)) ? i : '').reduce((acc, i) => acc += i));

// Elzero