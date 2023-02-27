"use strict";
class _Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(x) { return `The Discount Is ${x}`; }
}
let gameOne_ = new _Game("Ys", 100);
let gameTwo_ = new _Game(2064, 100);
console.log(gameOne_.title);
console.log(gameOne_.price);
gameOne_.getDiscount("50");
console.log(gameTwo_.title);
console.log(gameTwo_.price);
gameTwo_.getDiscount(80);
