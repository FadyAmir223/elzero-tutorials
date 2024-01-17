// Create Enums + Function Here
enum Game_ {
  Easy = 100,
  Medium = Game_.Easy - 20,
  Hard = (Game_.Medium - 20) / 2,
  Insane = fn(10)
};

function fn(x) { return Game_.Hard - x };

// Output
console.log(Game_.Easy); // 100
console.log(Game_.Medium); // 80
console.log(Game_.Hard); // 30
console.log(Game_.Insane); // 20