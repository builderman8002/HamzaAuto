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

console.log("H\nA\nM\nZ\nA\n2\n0\n0\n8");
console.log(" Developed by Hamza Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza a Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza h Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza m Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza e Terms of Service · Privacy Policy©");
console.log(" Developed by Hamza d Terms of Service · Privacy Policy©");

/*let big = document.querySelector('.dropdown')
let small = document.querySelector('.dropdown-content')
big.onclick = function () {
    small.classList.toggle('open')
}*/
