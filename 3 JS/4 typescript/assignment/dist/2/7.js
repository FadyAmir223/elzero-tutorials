"use strict";
var Game_;
(function (Game_) {
    Game_[Game_["Easy"] = 100] = "Easy";
    Game_[Game_["Medium"] = 80] = "Medium";
    Game_[Game_["Hard"] = 30] = "Hard";
    Game_[Game_["Insane"] = fn(10)] = "Insane";
})(Game_ || (Game_ = {}));
;
function fn(x) { return Game_.Hard - x; }
;
console.log(Game_.Easy);
console.log(Game_.Medium);
console.log(Game_.Hard);
console.log(Game_.Insane);
