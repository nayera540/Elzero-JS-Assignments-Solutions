let start = 10;
let end = 0;
let stop = 3;

// Output
for(let i = start; i >= stop; i--){
    if(i < start)
        console.log(`0${i}`);
    else
        console.log(i);
}
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03