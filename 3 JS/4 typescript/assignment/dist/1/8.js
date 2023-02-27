"use strict";
function printInConsole(...args) {
    let out = '';
    args.forEach(i => {
        out += `The Value Is ${i} And Type Is ${typeof i}\n`;
    });
    out += 'done';
    return out;
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
