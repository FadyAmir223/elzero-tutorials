"use strict";
class Player {
    constructor(name, type, lv, vip) {
        this.name = name;
        this.type = type;
        this.lv = lv;
        this.vip = vip;
        this.details = function () {
            return `${this.vip ? 'VIP' : ''} ${this.name}, Type Is ${this.type} Level Is ${this.lv}`;
        };
    }
    _details() {
        return `${this.vip ? 'VIP' : ''} ${this.name}, Type Is ${this.type} Level Is ${this.lv}`;
    }
}
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details());
console.log(player2.details());
console.log(player3.details());
console.log(player4.details());
