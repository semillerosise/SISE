document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    let menuOpen = false;

    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuOpen = !menuOpen;

        // Cambiar icono entre "bars" y "X"
        if (menuOpen) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });
});
