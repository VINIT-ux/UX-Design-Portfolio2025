document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    let navbar = document.querySelector(".navbar");
    let navLinks = document.querySelector(".nav-links");
    let menuOpenBtn = document.querySelector(".navbar .bx-menu");
    let menuCloseBtn = document.querySelector(".nav-links .bx-x");
    let htmlcssArrow = document.querySelector(".htmlcss-arrow");
    let jsArrow = document.querySelector(".js-arrow");
  
    // Open sidebar
    if (menuOpenBtn) {
      menuOpenBtn.onclick = function () {
        navLinks.style.left = "0";
      };
    }
  
    // Close sidebar
    if (menuCloseBtn) {
      menuCloseBtn.onclick = function () {
        navLinks.style.left = "-100%";
      };
    }
  
    // Toggle submenu for HTML/CSS
    if (htmlcssArrow) {
      htmlcssArrow.onclick = function () {
        navLinks.classList.toggle("show1");
      };
    }
  
    // Toggle submenu for JavaScript
    if (jsArrow) {
      jsArrow.onclick = function () {
        navLinks.classList.toggle("show3");
      };
    }
  });
  