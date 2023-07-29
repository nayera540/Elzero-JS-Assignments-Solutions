let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArr = myArray.reduce(function (acc, ele) {
    if (Array.isArray(ele)) {
        let newEle = ele.reduce(function (acc, ele) {
            return acc + ele;
        });
        ele = newEle;
    }
    return `${acc}${ele}`;
});

console.log(newArr); //Elzero

