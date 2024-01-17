function car(name, model, price) {
  this.n = name;
  this.m = model;
  this.p = price;
}

class Car {
  constructor (name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;  
  }
  run () {
    console.log('Car Is Running Now');
  }
  stop () {
    console.log('Car Is Stopped');
  }
}

let x = new Car('MG', 2022, 420000);
let y = new Car('1', 1, 1);
let z = new Car('2', 2, 2);

console.log(`Car One Name Is ${x.n} And Model Is ${x.m} And Price Is ${x.p}`);
x.run();

// Needed Output
"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"