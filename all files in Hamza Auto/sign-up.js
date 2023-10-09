let load = document.querySelector(".load")

function nonload() {
    load.style.display = "none"
}

setTimeout(nonload, 3000)



let inputOne = document.querySelector(".inputOne")
let inputTwo = document.querySelector(".inputTwo")
let inputThree = document.querySelector(".inputThree")

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

