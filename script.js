
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

function toggleNavProjects() {
  const projectsMenu = document.querySelector(".nav-projects-links");
  const projectsYears = document.querySelector(".nav-years-text");
  projectsMenu.classList.toggle("expand");
  projectsYears.classList.toggle("expand");
}

const projectsnav = document.querySelector('#projects');

function toggleNavProjects(){
  projectsnav.classList.add('showd');
}

function hidewNavd(){
  projectsnav.classList.remove('showd');
}