document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.getElementById("hamburger-menu");

  // Toggle menu saat hamburger diklik
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation(); // Cegah bubbling
    navbarNav.classList.toggle("active");
  });

  // Tutup menu jika klik di luar
  document.addEventListener("click", function (e) {
    if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });

  // Tambah class 'scrolled' saat user scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
