let start = 10;
let end = 100;
let exclude = 40;

// Output
for(let i = start; i <= end; i= i+10){
    if(i == exclude)
        continue;
    console.log(i);
}
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100