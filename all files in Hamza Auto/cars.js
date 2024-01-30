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


let date = document.querySelector("#date")
date.innerHTML = `${new Date().getFullYear()}`