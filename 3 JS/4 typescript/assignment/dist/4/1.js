"use strict";
class Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
class RPG extends Game {
    constructor(title, price, rate) {
        super(title, price);
        this.rate = rate;
    }
    getLocation() { return ''; }
    getDiscount() { return ''; }
}
class Action extends Game {
    constructor(title, price, rate, company) {
        super(title, price);
        this.rate = rate;
        this.company = company;
    }
    getLocation() { return ''; }
    getDiscount() { return ''; }
}
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title);
console.log(gameOne.price);
console.log(gameOne.rate);
console.log(gameOne.getDiscount());
console.log(gameOne.getLocation());
console.log(gameTwo.title);
console.log(gameTwo.price);
console.log(gameTwo.rate);
console.log(gameTwo.company);
console.log(gameTwo.getDiscount());
console.log(gameTwo.getLocation());
