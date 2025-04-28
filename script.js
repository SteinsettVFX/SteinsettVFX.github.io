let nav = document.querySelectorAll("nav a");

nav.forEach((el)=>{
  el.addEventListener("click", (e)=>{
    e.preventDefault();
    let t = e.target.getAttribute('href');
    document.querySelector(".active").classList.remove("active");
    document.querySelector(t).classList.add("active")
  });
});