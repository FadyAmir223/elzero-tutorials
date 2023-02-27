let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle) &&
    haystack.indexOf(needle) !== -1 &&
    haystack[1] === needle) {
    console.log("Found");
}
