// Obtener el modal
var modal = document.getElementById("modal-seminario");

// Obtener el botón de cerrar
var closeBtn = document.getElementById("closeBtn");

// Cuando la página se cargue, mostrar el modal
window.onload = function() {
    // Aplica la animación al modal cuando se muestra
    modal.style.display = "block";
    modal.setAttribute("transition-style", "in:circle:hesitate");
}

// Cuando el usuario haga clic en el botón de cerrar, cerrar el modal
closeBtn.onclick = function() {
    modal.style.display = "none";
    modal.removeAttribute("transition-style"); // Remueve la animación al cerrar
}

// Si el usuario hace clic fuera del modal, también cerrarlo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal.removeAttribute("transition-style"); // Remueve la animación al cerrar
    }
}
