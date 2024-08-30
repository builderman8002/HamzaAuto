let mainform = document.querySelector(".inputs form")
let inputOne = document.querySelector(".inputOne")
let inputTwo = document.querySelector(".inputTwo")
let inputThree = document.querySelector(".inputThree")
let check1 = document.querySelector(".check-1")
let nocheck1 = document.querySelector(".nocheck-1")
let check2 = document.querySelector(".check-2")
let nocheck2 = document.querySelector(".nocheck-2")
let check3 = document.querySelector(".check-3")
let nocheck3 = document.querySelector(".nocheck-3")

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



mainform.onsubmit = function (e) {
    let uservalid = false;
    let emailvalid = false;
    let feedbackvalid = false;



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
        //feedbackvalid = true;
        check3.style.display = "block"
        nocheck3.style.display = "none"
    } else {
        nocheck3.style.display = "block"
        check3.style.display = "none"
    }


    if (uservalid === false || emailvalid === false || feedbackvalid === false) {
        e.preventDefault();
    }

    //if you have a database to send form delete "resetform" function//

    function resetform() {
        if (inputOne.value !== "" && inputOne.value.length <= 20 && inputTwo.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/)) {
            mainform.reset()
            console.log("THE FORM HAS BEEN SEND");
            check1.style.display = "none"
            check2.style.display = "none"
            check3.style.display = "none"
        }
    }

    setTimeout(resetform, 1000)

}









let date = document.querySelector("#date")
date.innerHTML = `${new Date().getFullYear()}`