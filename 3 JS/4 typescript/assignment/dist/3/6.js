"use strict";
class Show {
    constructor(_title) {
        this._title = _title;
    }
    get title() { return this._title; }
    ;
    set title(val) { this._title = val; }
}
let _tester = new Show("Elzero");
console.log(_tester.title);
_tester.title = "Osama";
console.log(_tester.title);
