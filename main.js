const iconHamburger = document.getElementById("iconHamburger");
const mobileMenu = document.querySelector("#mobileMenu");


iconHamburger.addEventListener("click", ()=> {
  mobileMenu.classList.toggle("active");
});
