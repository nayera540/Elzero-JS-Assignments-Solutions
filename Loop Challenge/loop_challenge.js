let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We have X Admins </div>`);

let count = 0;
while(count < myAdmins.length){
  if(myAdmins[count] == "Stop") break;
  count++;
}
document.write(`<div>We have ${count} Admins`);
document.write(`<hr></hr>`);

for(let i = 0; i < count; i++){
  let counter = 0;
  document.write(`<div>
The Admin For Team 1 is ${myAdmins[i]}
<h3>Team Members: </h3>`);
  for(let j = 0; j < myEmployees.length; j++){
    if(myEmployees[j][0] === myAdmins[i][0]){
      counter++;
      document.write(`<p>- ${counter} ${myEmployees[j]} </p>`)
    }
  }
  document.write(`</div>`);
  document.write(`<hr></hr`);
}
