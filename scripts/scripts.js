const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("flex");
});
