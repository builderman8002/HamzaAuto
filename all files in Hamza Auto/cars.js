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


let date = document.querySelector("#date")
date.innerHTML = `${new Date().getFullYear()}`