let st = "Elzero Web School";

if (st.toLocaleLowerCase()[st.toLocaleLowerCase().indexOf('w')] === "w") {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.split(' ')[0].repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
