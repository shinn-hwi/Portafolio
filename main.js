window.onscroll = function() {navbarFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navbarFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
}
