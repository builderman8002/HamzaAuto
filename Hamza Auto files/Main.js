let btn = document.querySelector(".btn");
window.onscroll = function () {
    if (window.scrollY >= 2000) {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
};
btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};


let big = document.querySelector(".dropbtn");
let small = document.querySelector(".dropdown-content");

big.onclick = function () {
    small.classList.toggle("active")
}



let offer = document.querySelector(".offer-1");
let cloSe = document.getElementById("bttn");

function popup() {
    offer.style.display = "block"
}

cloSe.onclick = function () {
    offer.style.display = "none"
}

setTimeout(popup, 6000)
setInterval(popup, 80000)




let OFFER = document.querySelector(".offer-2");
let CLOSE = document.getElementById("bttn-2");

function POPUP() {
    OFFER.style.display = "block"
}

CLOSE.onclick = function () {
    OFFER.style.display = "none"
}

setTimeout(POPUP, 15000)
setInterval(POPUP, 100000)






console.log("H\nA\nM\nZ\nA\n2\n0\n0\n8");
console.log(" Developed by Hamza Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza a Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza h Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza m Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza e Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza d Terms of Service · Privacy Policy©");


