let index = 10;
let jump = 2;
let end = 0;

for (;;) {
    if (index < end || index == jump) break;
    console.log(index);
    index -= jump;
}

// Output
// 10
// 8
// 6
// 4