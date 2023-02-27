/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let adminCount = myAdmins.indexOf("Stop");

document.write(`<div>We Have ${adminCount} Admins</div>`);

for (let i = 0; i < adminCount; i++) {
  document.write('<hr></hr>')
  document.write('<div>');
  document.write(`The Admin For Team ${i + 1} is ${myAdmins[i]}`);
  document.write('<h3>Team Members:</h3>');
  
  let employeesCounter = 0;
  for (let j of myEmployees)
    if (j.startsWith(myAdmins[i][0]))
      document.write(`<p>- ${++employeesCounter} ${j}</p>`);
  document.write('</div>');
}
