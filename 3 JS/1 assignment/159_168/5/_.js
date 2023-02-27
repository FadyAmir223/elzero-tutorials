let x = performance.now();
for (let i = 1; i <= 9999; i++) console.log(i);
console.log(`Loop Took ${(performance.now() - x).toFixed()} Milliseconds.`);

// Needed Output
"Loop Took 1921 Milliseconds."