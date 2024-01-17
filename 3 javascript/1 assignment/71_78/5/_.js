let nums = [2, 12, 11, 5, 10, 1, 99];

console.log(nums.reduce((acc, i) => i % 2 == 0 ? acc *= i : acc += i, init = 1));

// 500