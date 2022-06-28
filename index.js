var burger = document.querySelector("button.burger");
var close = document.querySelector("button.close");
var nav = document.querySelector("nav.nav--main");

function openMenu() {
  burger.style.display = "none";
  close.style.display = "block";
  nav.classList.add("nav--open");
}

function closeMenu() {
  nav.classList.remove("nav--open");
  burger.style.display = "block";
  close.style.display = "none";
}

burger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
