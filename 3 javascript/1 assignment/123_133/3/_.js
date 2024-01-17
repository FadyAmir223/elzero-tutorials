let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let _map = new Map(Object.entries(myInfo));
console.log(_map);
console.log(_map.size);
console.log(_map.has('role'));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true