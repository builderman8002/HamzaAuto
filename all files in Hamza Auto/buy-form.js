let mainform = document.querySelector(".inputs form")
let check1 = document.querySelector(".check-1")
let nocheck1 = document.querySelector(".nocheck-1")
let check2 = document.querySelector(".check-2")
let nocheck2 = document.querySelector(".nocheck-2")
let check3 = document.querySelector(".check-3")
let nocheck3 = document.querySelector(".nocheck-3")
let check4 = document.querySelector(".check-4")
let nocheck4 = document.querySelector(".nocheck-4")
let check5 = document.querySelector(".check-5")
let nocheck5 = document.querySelector(".nocheck-5")
let check6 = document.querySelector(".check-6")
let nocheck6 = document.querySelector(".nocheck-6")
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



mainform.onsubmit = function (e) {
    let uservalid = false;
    let emailvalid = false;
    let numvalid = false;
    let countryvalid = false;
    let agevalid = false;
    let licensevalid = false;





    if (inputOne.value !== "" && inputOne.value.length <= 20) {
        //uservalid = true;
        check1.style.display = "block"
        nocheck1.style.display = "none"
    } else {
        nocheck1.style.display = "block"
        check1.style.display = "none"
    }

    if (inputTwo.value.match(/^[a-z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)+$/)) {
        //emailvalid = true;
        check2.style.display = "block"
        nocheck2.style.display = "none"
    } else {
        nocheck2.style.display = "block"
        check2.style.display = "none"
    }

    if (inputThree.value.match(/^[0-9]+$/)) {
        //numvalid = true;
        check3.style.display = "block"
        nocheck3.style.display = "none"
    } else {
        nocheck3.style.display = "block"
        check3.style.display = "none"
    }
    if (inputFour.value.match(/[a-zA-Z]+/)) {
        //countryvalid = true;
        check4.style.display = "block"
        nocheck4.style.display = "none"
    } else {
        nocheck4.style.display = "block"
        check4.style.display = "none"
    }
    if (inputFive.value.length <= 2 && inputFive.value.match(/^[0-9]+$/)) {
        //agevalid = true;
        check5.style.display = "block"
        nocheck5.style.display = "none"
    } else {
        nocheck5.style.display = "block"
        check5.style.display = "none"
    }
    if (inputSix.value == "y" || inputSix.value == "n") {
        //licensevalid = true;
        check6.style.display = "block"
        nocheck6.style.display = "none"
    } else {
        nocheck6.style.display = "block"
        check6.style.display = "none"
    }

    if (uservalid === false || emailvalid === false || numvalid === false || countryvalid === false || agevalid === false || licensevalid === false) {
        e.preventDefault();
    }

    //if you have a database to send form delete "resetform" function//

    function resetform() {
        if (inputOne.value == "" || inputTwo.value == "" || inputThree.value == "" || inputFour.value == "" || inputFive.value == "" || inputSix.value == "") {
        } else {
            mainform.reset()
            console.log("THE FORM HAS BEEN SEND");
            check1.style.display = "none"
            check2.style.display = "none"
            check3.style.display = "none"
            check4.style.display = "none"
            check5.style.display = "none"
            check6.style.display = "none"
        }
    }
    setTimeout(resetform, 1000)

}






let date = document.querySelector("#date")
date.innerHTML = `${new Date().getFullYear()}`