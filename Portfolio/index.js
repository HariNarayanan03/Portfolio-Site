
const scrollTop = document.getElementById('scroll-up')
// When the page is loaded, hide the scroll-to-top button
window.onload = () => {
 scrollTop.style.visibility = "hidden";
 scrollTop.style.opacity = 0;
}
// If the page is scrolled more than 200px,
// display the scroll-to-top button
// Otherwise keep the button hidden
window.onscroll = () => {
 if (window.scrollY > 200) {
 scrollTop.style.visibility = "visible";
 scrollTop.style.opacity = 1;
 } else {
 scrollTop.style.visibility = "hidden";
 scrollTop.style.opacity = 0;
 }
};


const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);