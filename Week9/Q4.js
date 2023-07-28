function specialMix(...data) {
    let result = 0;
    for(let i = 0; i < data.length; i++){
        let n = parseInt(data[i])
        if(isNaN(n)){
            n = 0;
        }
        result +=n;
    }
    
    return result === 0? "All Is Strings" : result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings