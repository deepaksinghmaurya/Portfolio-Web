var html = document.querySelector("html");
var toggleOpen = document.getElementById('toggle-open');
var toggleClose = document.getElementById('toggle-close');
var navMenu = document.getElementsByClassName('nav-menu')[0];
html.addEventListener('click', function () {
    navMenu.classList.remove('open');
});

toggleOpen.addEventListener('click', function (e) {
    e.stopPropagation();
    navMenu.classList.toggle('open');
});

toggleClose.addEventListener('click', function (e) {
    e.stopPropagation();
    navMenu.classList.toggle('open');
});


var mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}