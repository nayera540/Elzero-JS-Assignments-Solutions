let myElement = document.getElementsByTagName("img");

for(let i = 0; i < myElement.length; i++){
    myElement[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    myElement[i].alt = "Elzero Logo";
}