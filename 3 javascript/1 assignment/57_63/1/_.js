function sayHello(theName, theGender) {
  // Your Code Here
  console.log(
    `Hello ${
      theGender == "Male" ? "Mr " : theGender == "Female" ? "Miss " : ""
    }${theName}`
  );
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
