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


let mainform = document.querySelector(".forms form")
let inputOne = document.querySelector(".inputOne")
let check1 = document.querySelector(".check-1")
let nocheck1 = document.querySelector(".nocheck-1")
let inputTwo = document.querySelector(".inputTwo")
let noshow = document.querySelector(".noshow")
let show = document.querySelector(".show")
let check2 = document.querySelector(".check-2")
let nocheck2 = document.querySelector(".nocheck-2")


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


mainform.onsubmit = function (e) {
    let uservalid = false;
    let passvalid = false;

    if (inputOne.value.match(/^[a-z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)+$/) || inputOne.value.match(/^[a-z0-9_\-]{3,25}$/) && inputOne.value.length <= 15) {
        //uservalid = true;
        check1.style.display = "block"
        nocheck1.style.display = "none"
    } else {
        nocheck1.style.display = "block"
        check1.style.display = "none"
    }

    if (inputTwo.value !== "") {
        //passvalid = true;
        check2.style.display = "block"
        nocheck2.style.display = "none"
    } else {
        nocheck2.style.display = "block"
        check2.style.display = "none"
    }

    if (uservalid === false || passvalid === false) {
        e.preventDefault();
    }

    //if you have a database to send form delete "resetform" function//

    function resetform() {
        if (inputOne.value == "" || inputTwo.value == "") {
        } else {
            mainform.reset()
            console.log("THE FORM HAS BEEN SEND");
            check1.style.display = "none"
            check2.style.display = "none"
        }
    }
    setTimeout(resetform, 1000)

    if (inputTwo.value == "") {
        noshow.style.display = "block"
        show.style.display = "none"
        inputTwo.type = "password"
        console.log("NO PASSWORD VALUE")
    }
}


noshow.onclick = function () {
    if (inputTwo.value == "") {
        noshow.style.display = "block"
        show.style.display = "none"
        inputTwo.type = "password"
        console.log("NO PASSWORD VALUE")
    } else {
        noshow.style.display = "none"
        show.style.display = "block"
        inputTwo.type = "text"
        console.log("PASSWORD VALUE EXIST")
    }
}

show.onclick = function () {
    inputTwo.type = "password"
    noshow.style.display = "block"
    show.style.display = "none"
}
