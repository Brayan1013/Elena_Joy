/** @format */

const burguer = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burguer.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  burguer.classList.toggle("open");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  burguer.classList.toggle("open");
});
