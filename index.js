var burger = document.querySelector("button.burger");
var close = document.querySelector("button.close");
var nav = document.querySelector("nav.nav--main");
var body = document.querySelector("body");
var menu = document.querySelector("nav__link-actions-mb");

function openMenu() {
  nav.classList.add("nav--open");
  body.classList.add("noScroll");
  menu.classList.add("nav__link-actions");
}

function closeMenu() {
  nav.classList.remove("nav--open");
  body.classList.remove("noScroll");
  menu.classList.remove("nav__link-actions");
}

function isMobile() {
  if (mediaQuery.matches) {
    closeMenu();
  }
}

// function myFunction(x) {
//   x.classList.toggle("close");
// }

burger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);

burger.addEventListener("click", function handleClick() {
  if ((burger.style.display = "none")) {
    close.style.display = "block";
  } else {
    burger.style.display = "none";
    close.style.display = "block";
  }
});
