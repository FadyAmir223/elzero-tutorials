let x = new Date();
const month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

x.setDate(0);
console.log(x);
console.log(`Previous Month Is ${month[x.getMonth()]} And Last Day Is ${x.getDate()}`);

// Needed Output
"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"