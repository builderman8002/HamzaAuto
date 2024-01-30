
let inputOne = document.querySelector(".inputOne")
let inputTwo = document.querySelector(".inputTwo")
let inputThree = document.querySelector(".inputThree")
let inputFour = document.querySelector(".inputFour")
let inputFive = document.querySelector(".inputFive")
let inputSix = document.querySelector(".inputSix")

window.onload = function () {
    inputOne.focus()
}


inputOne.onfocus = function () {
    inputOne.style.border = "1px solid #111727";
    inputOne.classList.add("outfoc");
}

inputOne.onblur = function () {
    inputOne.classList.remove("outfoc");
    inputOne.style.border = "";
}


inputTwo.onfocus = function () {
    inputTwo.style.border = "1px solid #111727";
    inputTwo.classList.add("outfoc");
}

inputTwo.onblur = function () {
    inputTwo.classList.remove("outfoc");
    inputTwo.style.border = "";
}


inputThree.onfocus = function () {
    inputThree.style.border = "1px solid #111727";
    inputThree.classList.add("outfoc");
}

inputThree.onblur = function () {
    inputThree.classList.remove("outfoc");
    inputThree.style.border = "";
}


inputFour.onfocus = function () {
    inputFour.style.border = "1px solid #111727";
    inputFour.classList.add("outfoc");
}

inputFour.onblur = function () {
    inputFour.classList.remove("outfoc");
    inputFour.style.border = "";
}


inputFive.onfocus = function () {
    inputFive.style.border = "1px solid #111727";
    inputFive.classList.add("outfoc");
}

inputFive.onblur = function () {
    inputFive.classList.remove("outfoc");
    inputFive.style.border = "";
}


inputSix.onfocus = function () {
    inputSix.style.border = "1px solid #111727";
    inputSix.classList.add("outfoc");
}

inputSix.onblur = function () {
    inputSix.classList.remove("outfoc");
    inputSix.style.border = "";
}


let date = document.querySelector("#date")
date.innerHTML = `${new Date().getFullYear()}`