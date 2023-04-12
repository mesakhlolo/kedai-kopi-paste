// Selector
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Hamburger menu onclick
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
