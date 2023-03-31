const headerel = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerel.classList.add('header-scrolled');
    }
    else if (window.scrollY <= 50) {
        headerel.classList.remove('header-scrolled');
    }
});

