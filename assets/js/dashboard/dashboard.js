// Selección de elementos
const menuIcon = document.querySelector('.menu-icon'); // Ícono del menú (móvil)
const navbar = document.querySelector('.navbar'); // Navbar principal
const submenuToggle = document.querySelector('.submenu-toggle'); // Botón de submenú
const submenu = document.querySelector('.submenu'); // Submenú de Casa Inteligente
const logout = document.querySelector('.logout'); // Botón Cerrar Sesión

// Función para alternar el navbar en móvil
menuIcon.addEventListener('click', () => {
    // Si el navbar está visible, lo oculta; si está oculto, lo muestra
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show'); // Desaparece (efecto dissolve)
    } else {
        navbar.classList.add('show'); // Aparece (efecto dissolve)
    }
});

// Función para alternar el submenú
submenuToggle.addEventListener('click', () => {
    submenu.classList.toggle('open'); // Agrega/quita la clase 'open' para mostrar/ocultar el submenú
});

// Función para mover "Cerrar Sesión" al navbar en móvil
function moveLogoutToNavbar() {
    if (window.innerWidth <= 768) {
        // En móvil, mueve el botón "Cerrar Sesión" al navbar
        if (!navbar.contains(logout)) {
            navbar.appendChild(logout);
        }
    } else {
        // En desktop, devuelve el botón "Cerrar Sesión" a su posición original
        if (!document.querySelector('.dashboard-header').contains(logout)) {
            document.querySelector('.dashboard-header').appendChild(logout);
        }
    }
}

// Escucha cambios en el tamaño de la ventana y ajusta el botón "Cerrar Sesión"
window.addEventListener('resize', moveLogoutToNavbar);

// Ejecuta la función al cargar la página
moveLogoutToNavbar();
