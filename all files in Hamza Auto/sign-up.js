let load = document.querySelector(".load")

function nonload() {
    load.style.display = "none"
}

setTimeout(nonload, 3000)

let effect = document.querySelector(".logo")

function toRight() {
    effect.classList.toggle("effect")
}

setTimeout(toRight, 3005)


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



/*
let test2 = document.querySelector(".sign-done")
let test = document.querySelector(".sign-done span")
let test1 = document.querySelector("#bttn")


test1.onclick = function () {
    test2.classList.toggle("effect")
    test.innerHTML = `${inputOne.value}`
}

test2.onclick = function () {
    test2.classList.toggle("effect")
}*/



