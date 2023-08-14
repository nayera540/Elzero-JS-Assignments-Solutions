let imgElements = document.getElementsByTagName("img");

for(let i = 0; i < imgElements.length; i++){
    if(imgElements[i].alt !==""){
        imgElements[i].alt = "Old";
    }else{
        imgElements[i].alt = "Elzero New";
    }
}