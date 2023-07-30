let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split("").map(function(ele){
    return ele === "_" ? " " : ele;
}).filter(function (ele,i,arr){
    return isNaN(parseInt(ele)) && ele !== "," && !ele.includes(arr[arr.length-true]);
}).reduce(function(acc,curr){
    return acc === curr? acc:acc+curr;
});

console.log(solution); //Elzero Web School
