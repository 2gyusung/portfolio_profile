const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')

menuIcon.onclick = ()=> {
  navLinks.classList.toggle('active')
}


let btn = document.querySelector(".img-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  console.log("클릭!!");

  window.scrollTo({ top: 0, behavior: "smooth" });
});

