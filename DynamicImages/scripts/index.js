"use strict";

window.onload = function () {
    let dropdownMenu = document.getElementById("images");
    imageFiles.forEach(function(image) {
        let option = document.createElement("option");
        option.text = image.description;
        dropdownMenu.add(option);
    });

    // buttons
    document.getElementById("addImg").addEventListener("click", addImage);
    document.getElementById("clearImg").addEventListener("click", clearImages);
};


function addImage() {
    let dropdownMenu = document.getElementById("images");
    let selectedImageText = dropdownMenu.options[dropdownMenu.selectedIndex].text;

    var selectedImage = imageFiles.find(function(image) {
        return image.description === selectedImageText;
    });

    var imageElement = document.createElement("img");
    imageElement.src = selectedImage.name;
    imageElement.alt = selectedImage.description;
    // looks ugly with those dimensions
    //imageElement.style.width = "200px"; 
    //imageElement.style.height = "300px"; 
    document.getElementById("imageDiv").appendChild(imageElement);
}

//  to clear all images from the div
function clearImages() {
    var imageContainer = document.getElementById("imageDiv");
    imageContainer.innerHTML = ""; 
}
