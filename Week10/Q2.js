let myString = "EElllzzzzzzzeroo";

let newS = myString.split("").filter(function (ele, index, array) {
    let nextEle = array[index+1];
    return ele !== nextEle;
}).join("");

console.log(newS); //Elzero

//Another Solution using the reduce function

let newString = myString.split("").filter(function(ele, index, array){
    let nextEle = array[index+1];
    return ele !== nextEle;
}).reduce(function(acc, ele){
    return `${acc}${ele}`;
});

console.log(newString); //Elzero


