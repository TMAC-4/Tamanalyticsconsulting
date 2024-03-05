const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navbar");

let menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menu.onclick = () => {
  navlist.classList.toggle("open");
};

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
});

window.onscroll = () => {
  menuBtn.classList.remove("open");
  navlist.classList.remove("open");
};
