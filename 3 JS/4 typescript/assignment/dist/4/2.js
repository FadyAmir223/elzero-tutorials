"use strict";
function showTypes(x, y, z) {
    return `${x || 'Nothing'} - ${y || 'Nothing'} - ${z || 'Nothing'}`;
}
console.log(showTypes());
console.log(showTypes("String"));
console.log(showTypes("String", 100));
console.log(showTypes("String", 100, true));
