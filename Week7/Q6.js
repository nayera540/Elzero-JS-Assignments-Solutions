let start = 0;
let swappedName = "elZerO";
let newName = [];

for(let i = start; i < swappedName.length; i++){
    if(swappedName[i] == swappedName[i].toLowerCase())
        newName.push(swappedName[i].toUpperCase());
    else
        newName.push(swappedName[i].toLowerCase());
}
console.log(newName.join(""));

// Output
// "ELzERo"