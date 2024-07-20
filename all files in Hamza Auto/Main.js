let btn = document.querySelector(".toTop");

window.onscroll = function () {
    if (window.scrollY >= 2000) {
        btn.style.visibility = "visible";
        btn.classList.add("effect")
    }
    else {
        btn.style.visibility = "hidden";
        btn.classList.remove("effect")
    }
}

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};


let big = document.querySelector("#menu");
let small = document.querySelector(".dropcontent");

big.onclick = function () {
    small.classList.toggle("active")
}


window.onclick = function (event) {
    if (!event.target.matches('#menu')) {
        var dropdowns = document.getElementsByClassName("dropcontent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }

        }
    }
}
small.addEventListener("click", event => event.stopPropagation());

/*
let newyear = document.querySelector(".new-year");
let hide = document.getElementById("hide");

function pop() {
    newyear.classList.add("effectOpenandClose")
}

hide.onclick = function () {
    newyear.classList.remove("effectOpenandClose")
}

setTimeout(pop, 5000)
setInterval(pop, 50000)*/



let offer = document.querySelector(".offer-1");
let cloSe = document.getElementById("bttn");

function popup() {
    offer.classList.add("effectOpenandClose")
}

cloSe.onclick = function () {
    offer.classList.remove("effectOpenandClose")
}

setTimeout(popup, 6000)
setInterval(popup, 80000)


let OFFER = document.querySelector(".offer-2");
let CLOSE = document.getElementById("bttn-2");

function POPUP() {
    OFFER.classList.add("effectOpenandClose")
}

CLOSE.onclick = function () {
    OFFER.classList.remove("effectOpenandClose")
}

setTimeout(POPUP, 15000)
setInterval(POPUP, 100000)

let date = document.querySelector("#date")
date.innerHTML = `${new Date().getFullYear()}`


console.log("H\nA\nM\nZ\nA\n2\n0\n0\n8");
console.log(" Developed by Hamza Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza a Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza h Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza m Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza e Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza d Terms of Service · Privacy Policy©");








