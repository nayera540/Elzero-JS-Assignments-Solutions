let inputVal = document.getElementsByTagName("input")[0];
let divEle = document.getElementsByTagName("div")[0];

inputVal.oninput = function(){
    let value = parseFloat(inputVal.value);

    if(inputVal.value == ""){
        divEle.textContent = "{0} USD Dollar = {0} Egyptian Pound";
    }
    else{
        divEle.textContent = `{${value}} USD Dollar = {${(value * 15.6).toFixed(2)}} Egyptian Pound`
    }
}