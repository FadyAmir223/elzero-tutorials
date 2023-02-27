interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here
class Player_ implements Play {
  constructor(public id: number, public title: string, public level: number) { }
  logIn(): void { console.log('Logged In'); }
  logOut(msg: string): void { console.log(`Logged Out, ${msg}`); }
}

let player1_ = new Player_(100, "Elzero", 95);

console.log(player1_.id); // 100
console.log(player1_.title); // "Elzero"
console.log(player1_.level); // 95
player1_.logIn(); // Logged In
player1_.logOut("Good Bye"); // Logged Out, Good Bye