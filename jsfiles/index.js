///// variables

const allSections = document.querySelectorAll("section");
const navList = document.querySelector(".navlist");

const menuButton = document.querySelector(".menu-bar");
const hideMenu = document.querySelector(".hide-menu");

//////////////////////////////////////////////////////
/////////////////// sticky navbar  ///////////////////
//////////////////////////////////////////////////////

function windowScroll() {
  const navbar = document.querySelector(".navbar");
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
}

window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});

/////////////////////////////////////////
//********* mobile navigation ***********
/////////////////////////////////////////

menuButton.addEventListener("click", () => {
  navList.classList.add("nav-open");
  menuButton.style.display = "none";

  hideMenu.style.display = "block";
});

hideMenu.addEventListener("click", () => {
  navList.classList.remove("nav-open");
  hideMenu.style.display = "none";
  menuButton.style.display = "block";
});
