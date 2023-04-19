function scrollValue() {
    var navbar = document.getElementById('nav');
    var scroll = window.scrollY;
    if (scroll < 400) {
        navbar.classList.remove('BgColour');
    } else {
        navbar.classList.add('BgColour');
    }
}

window.addEventListener('scroll', scrollValue);