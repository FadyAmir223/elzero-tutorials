let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(start=false, end=num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop() // myFriends.length = num
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
