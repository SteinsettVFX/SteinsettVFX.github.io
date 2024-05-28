function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const hamburgernav = document.querySelector('#hamburger-nav');

function showNav(){
    hamburgernav.classList.add('show');
}

function hidewNav(){
    hamburgernav.classList.remove('show');
}
var currPos = window.scrollY;
document.addEventListener('scroll', () => {
  if (window.scrollY > currPos) {
  //scroll up
    hidewNav();
  } else {
  //scroll down
    showNav();
  }
  currPos = window.scrollY;
});

const desktopnav = document.querySelector('#desktop-nav');

function showNavd(){
    desktopnav.classList.add('showd');
}

function hidewNavd(){
    desktopnav.classList.remove('showd');
}
var currPos = window.scrollY;
document.addEventListener('scroll', () => {
  if (window.scrollY > currPos) {
  //scroll up
    hidewNavd();
  } else {
  //scroll down
    showNavd();
  }
  currPos = window.scrollY;
});