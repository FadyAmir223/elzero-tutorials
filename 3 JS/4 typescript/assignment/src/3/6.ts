class Show {
  constructor (private _title: string) {}
  get title(): string { return this._title };
  set title(val: string) { this._title = val }
}

let _tester = new Show("Elzero");

console.log(_tester.title); // Property 'title' does not exist on type 'Show'
_tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(_tester.title); // Property 'title' does not exist on type 'Show'