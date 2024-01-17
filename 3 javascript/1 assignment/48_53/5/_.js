let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i of friends) {
    if (i.toLocaleLowerCase().startsWith(letter)) continue;
    console.log(`${friends.indexOf(i)} => ${i}`)
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"