let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for(let i = letter.indexOf(letter); i < friends.length; i++){
    if(friends[i].toLowerCase().startsWith(letter))
        friends.splice(i , letter.length);
}

for(let i = letter.indexOf(letter); i < friends.length; i++){
    console.log(`${i + letter.length} => ${friends[i]}`)
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"