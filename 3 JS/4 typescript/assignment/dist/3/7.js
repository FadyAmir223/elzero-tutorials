"use strict";
class Player_ {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn() { console.log('Logged In'); }
    logOut(msg) { console.log(`Logged Out, ${msg}`); }
}
let player1_ = new Player_(100, "Elzero", 95);
console.log(player1_.id);
console.log(player1_.title);
console.log(player1_.level);
player1_.logIn();
player1_.logOut("Good Bye");
