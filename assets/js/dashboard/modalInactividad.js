// Selección de elementos
const modal = document.getElementById('inactiveModal');
const stayButton = document.getElementById('stayButton');
let inactivityTimer;
let redirectTimer;

// Función para mostrar el modal
function showModal() {
    modal.style.display = 'flex'; // Muestra el modal
    startRedirectTimer(); // Inicia el temporizador para redirigir después de 3 segundos
}

// Función para iniciar el temporizador de redirección
function startRedirectTimer() {
    // Temporizador para redirigir si no se hace clic en "Permanecer"
    redirectTimer = setTimeout(() => {
        window.location.href = '../../pages/proyectos/materialCasa.html'; // URL de redirección
    }, 3 * 60 * 1000); // 3 minutos de espera
}

// Función para restablecer el temporizador de inactividad
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(showModal, 10 * 60 * 1000); // Mostrar modal después de 10 minutos de inactividad
}

// Detectar actividad del usuario y restablecer el temporizador
window.onload = resetInactivityTimer; // Inicia el temporizador al cargar la página
document.onmousemove = resetInactivityTimer; // Reinicia el temporizador si el ratón se mueve
document.onkeydown = resetInactivityTimer; // Reinicia el temporizador si el usuario presiona una tecla
document.onclick = resetInactivityTimer; // Reinicia el temporizador si el usuario hace clic

// Evento de clic para el botón "Permanecer en la página"
stayButton.onclick = () => {
    clearTimeout(redirectTimer); // Detiene el temporizador de redirección
    modal.style.display = 'none'; // Cierra el modal
    resetInactivityTimer(); // Reinicia el temporizador de inactividad
};
