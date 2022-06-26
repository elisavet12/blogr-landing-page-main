var burger = document.querySelector("button.burger");
var close = document.querySelector("button.close");
var nav = document.querySelector("nav.nav--main");
var body = document.querySelector("body");
var menu = document.querySelector("nav__link-actions-mb");
// var elsa = document.querySelector("div.header__nav");

function openMenu() {
  nav.classList.add("nav--open");
  body.classList.add("noScroll");
  menu.classList.add("nav__link-actions");
  // burger.classList.remove("burger");
  // close.classList.add("close");
}

function closeMenu() {
  nav.classList.remove("nav--open");
  body.classList.remove("noScroll");
  menu.classList.remove("nav__link-actions");
  // burger.classList.add("burger");
  // close.classList.remove("close");
}

function isMobile() {
  if (mediaQuery.matches) {
    closeMenu();
  }
}

burger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
