"use script";


window.onload = init;
function init(){
const imageGroup = document.getElementsByClassName("imageGroup");
    Array.from(imageGroup).forEach((element) => element.style.border = "4px solid red");


    const images = document.querySelectorAll("img:not([alt])")

    Array.from(images).forEach(function (element) {
        element.alt = "graffiti image"
    
        console.log(images)
    });
}
    
