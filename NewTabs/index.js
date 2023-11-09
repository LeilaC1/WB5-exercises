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

    let objSet1 = document.querySelectorAll("p");
    console.log("objSet1:"+ objSet1);

    let objSet2 = document.querySelectorAll(".attn");
    console.log("objSet2:"+ objSet2);

    let objSet3 = document.querySelectorAll("p.attn");
    console.log("objSet3:"+ objSet3);

    let objSet4 = document.querySelectorAll("img[alt]");
    console.log("objSet4:"+ objSet4);


    let objSet5 = document.querySelectorAll("div > p");
    console.log("objSet5:"+ objSet5);

    let objSet6 = document.querySelectorAll("div, span");
    console.log("objSet6:"+ objSet6);

}