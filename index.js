var swiper = new Swiper(".home", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let navbar = document.querySelector(".navbar")
let menu = document.querySelector("#menu-icon")

menu.addEventListener("click", (evt) => {
    menu.classList.toggle("bx-x")
    navbar.classList.toggle("tog")

})
window.onscroll = function () {
    menu.classList.remove("bx-x")
    navbar.classList.remove("tog")
}


