// Write Class Code Here
class _Game <T> {
  constructor (public title: T, public price: number) {}
  getDiscount(x: T): string { return `The Discount Is ${x}`; }
}

// Do Not Edit Here
let gameOne_ = new _Game<string>("Ys", 100);
let gameTwo_ = new _Game<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne_.title); // "Ys"
console.log(gameOne_.price); // 100
gameOne_.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo_.title); // 2064
console.log(gameTwo_.price); // 100
gameTwo_.getDiscount(80); // "The Discount Is 80"