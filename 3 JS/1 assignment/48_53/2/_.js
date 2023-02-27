let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= end; i--) {
    if (i == stop) break;
    console.log(i.toString().length === 1 ? `${end}${i}` : i.toString());
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03