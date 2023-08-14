let div1 = document.querySelector(".one");
let div2 = document.querySelector(".two");

let textTemp = div1.textContent;

div1.textContent = div2.textContent;
div2.textContent = textTemp + " " + document.querySelectorAll("div").length;

let titleTemp = div1.title;

div1.title = div2.title;
div2.title = titleTemp;