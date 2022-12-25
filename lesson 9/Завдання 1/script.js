let scrollDown = document.querySelector(".scrollDown");
let scrollUp = document.querySelector(".scrollUp");
let redLine = document.querySelector(".redLine");
let img = document.querySelector(".img");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY < 400) {
        scrollDown.style.fontSize = window.scrollY / 14 + 36 + "px";
        scrollDown.style.top = window.scrollY / 3 + "px";
    }
    if (window.scrollY > 400 && window.scrollY < 900) {
        redLine.style.width = window.scrollY / 1.428 + "px";
        redLine.style.left = window.scrollY / 10 + "px";
        img.style.right = 2 * (window.scrollY / 12 - 33) + "px";
    }
    if (window.scrollY > 1000 && window.scrollY < 1444) {
        scrollUp.style.fontSize = window.scrollY / 36 + 36 + "px";
    }
});

scrollDown.addEventListener("click", () => {
    window.scroll({
        top: 720,
        behavior: "smooth",
    });
});
scrollUp.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
