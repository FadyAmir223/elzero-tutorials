let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
let {title, age, available, skills: [, skill]} = myFriends[--chosen];
console.log(`${title}\n${age}\n${available? '': 'not '}Available\n${skill}`);
