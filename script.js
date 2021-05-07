const burgerBtn = document.querySelector(".burger-button");
const nav = document.querySelector("nav");
const menu = document.querySelector(".container-nav .menu");

burgerBtn.addEventListener("click", () => {
   menu.classList.toggle("slide");
   // nav.classList.toggle("static");
});
