let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce(function (acc, ele, i, array) {
    if(ele % 2 === 0)
        return acc * ele;
    return acc + ele;
}, 1);

console.log(result);

// 500