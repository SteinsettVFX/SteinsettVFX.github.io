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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}