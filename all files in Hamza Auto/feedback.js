
let inputOne = document.querySelector(".inputOne")
let inputTwo = document.querySelector(".inputTwo")
let inputThree = document.querySelector(".inputThree")

let face1 = document.querySelector("#chose-1")
let face2 = document.querySelector("#chose-2")
let face3 = document.querySelector("#chose-3")


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



face1.onclick = function () {
    face1.classList.toggle("border");
}

face2.onclick = function () {
    face2.classList.toggle("border");
}

face3.onclick = function () {
    face3.classList.toggle("border");
}



let date = document.querySelector("#date")
date.innerHTML = `${new Date().getFullYear()}`