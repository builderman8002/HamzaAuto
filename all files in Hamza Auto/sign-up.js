let load = document.querySelector(".load")

function nonload() {
    load.style.visibility = "hidden"
    load.style.opacity = "0.5"
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



let mainform = document.querySelector(".inputs form")
let check1 = document.querySelector(".check-1")
let nocheck1 = document.querySelector(".nocheck-1")
let check2 = document.querySelector(".check-2")
let nocheck2 = document.querySelector(".nocheck-2")
let check3 = document.querySelector(".check-3")
let nocheck3 = document.querySelector(".nocheck-3")
let noshow = document.querySelector(".noshow")
let show = document.querySelector(".show")
let test2 = document.querySelector(".sign-done")
let test = document.querySelector(".sign-done .sign-done-name h1")


mainform.onsubmit = function (e) {
    let uservalid = false;
    let emailvalid = false;
    let passvalid = false;

    if (inputOne.value !== "" && inputOne.value.length <= 20) {
        //uservalid = true;
        check1.style.display = "block"
        nocheck1.style.display = "none"
    } else {
        nocheck1.style.display = "block"
        check1.style.display = "none"
    }

    if (inputTwo.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/)) {
        //emailvalid = true;
        check2.style.display = "block"
        nocheck2.style.display = "none"
    } else {
        nocheck2.style.display = "block"
        check2.style.display = "none"
    }
    if (inputThree.value !== "") {
        //passvalid = true;
        check3.style.display = "block"
        nocheck3.style.display = "none"
    } else {
        nocheck3.style.display = "block"
        check3.style.display = "none"
    }

    if (uservalid === false || emailvalid === false || passvalid === false) {
        e.preventDefault();
    }

    //if you have a database to send form delete "resetform" function//

    function resetform() {
        if (inputOne.value !== "" && inputOne.value.length <= 20 && inputTwo.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/) && inputThree.value !== "") {
            mainform.reset()
            console.log("THE FORM HAS BEEN SEND");
            check1.style.display = "none"
            check2.style.display = "none"
            check3.style.display = "none"
        }
    }

    setTimeout(resetform, 1000)


    test.innerHTML = `${inputOne.value}`

    function show55() {
        if (inputOne.value == "") {
            test2.classList.add("effect")
        } else {
            test2.classList.remove("effect")
        }

        if (inputTwo.value == "") {
            test2.classList.add("effect")
        } else {
            test2.classList.remove("effect")
        }

        if (inputThree.value == "") {
            test2.classList.add("effect")
        } else {
            test2.classList.remove("effect")
        }

        if (nocheck1.style.display == "block") {
            test2.classList.remove("effect")
        }
        if (nocheck2.style.display == "block") {
            test2.classList.remove("effect")
        }
        if (nocheck3.style.display == "block") {
            test2.classList.remove("effect")
        }
    }

    setTimeout(show55, 2000)


    function deleteSignDone() {
        if (inputOne.value == "" || inputTwo.value == "" || inputThree.value == "") {
            test2.classList.remove("effect")
        }
    }
    setTimeout(deleteSignDone, 5000)



    if (inputThree.value == "") {
        noshow.style.display = "block"
        show.style.display = "none"
        inputThree.type = "password"
        console.log("NO PASSWORD VALUE")
    }
}


noshow.onclick = function () {
    if (inputThree.value == "") {
        noshow.style.display = "block"
        show.style.display = "none"
        inputThree.type = "password"
        console.log("NO PASSWORD VALUE")
    } else {
        noshow.style.display = "none"
        show.style.display = "block"
        inputThree.type = "text"
        console.log("PASSWORD VALUE EXIST")
    }

}


show.onclick = function () {
    inputThree.type = "password"
    noshow.style.display = "block"
    show.style.display = "none"
}





