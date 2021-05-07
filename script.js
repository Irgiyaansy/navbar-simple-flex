const burgerBtn = document.querySelector(".burger-button");
const navbar = document.querySelector(".container-nav .menu");

burgerBtn.addEventListener("click", () => {
   navbar.classList.toggle("slide");
});
