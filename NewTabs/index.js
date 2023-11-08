"use strict"; 

window.onload = function() {
    const btn = document.getElementById("btn");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    btn.onclick = btnClicked;
    btn2.onclick = btn2Clicked;
    btn3.onclick = btn3Clicked;


    function btnClicked() {
        window.open("https://www.google.com/");

    };
    function btn2Clicked() {
            window.open("https://w3schools.com/");
    
        };
    function btn3Clicked() {
        window.open("image.html", "_self");

    };
}