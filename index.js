var burger = document.querySelector("button.burger");
var close = document.querySelector("button.close");
var nav = document.querySelector("nav.nav--main");
var body = document.querySelector("body");

function openMenu() {
  nav.classList.add("nav--open");
  body.classList.add("noScroll");
}

function closeMenu() {
  nav.classList.remove("nav--open");
  body.classList.remove("noScroll");
}

function isMobile() {
  if (mediaQuery.matches) {
    closeMenu();
  }
}

burger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
