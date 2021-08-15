var bar_icon = document.getElementById('bar');
var sidebar = document.getElementById('Sidebar');
var hidebutton = document.getElementById('Hide');
var navbar = document.getElementById('Navbar');
var links = document.querySelectorAll('.navbar-item')

var sticky = navbar.offsetTop;

bar_icon.addEventListener('click', function () {
    sidebar.classList.remove('sidebar-display-none');
})

hidebutton.addEventListener('click', function () {
    sidebar.classList.add('sidebar-display-none');
})

//sticky navbar
window.onscroll = function () {
    if (window.pageYOffset >= 10) {
        navbar.classList.add("sticky");
        links.forEach(link => {
            link.classList.add("navLink")
        });
    } else {
        navbar.classList.remove("sticky");
        links.forEach(link => {
            link.classList.remove("navLink")
        });
    }
}

console.log(links)