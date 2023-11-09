"use strict";

window.onload = function (){
    const paragraphs = document.getElementsByTagName("p");
    for(let i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.border = "1px solid black";
    }
};
const img = document.getElementsByTagName("img");
for(let i = 0; i < img.length; i++){
    img[i].classList.add ("roundedImg");
    img[i].setAttribute ("src", "https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288870.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais");
    img[i].setAttribute ("alt", "cute pic");


}
