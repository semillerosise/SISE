// Inicializar EmailJS
emailjs.init("Qd9lLPOuNzj4tn0y8"); // Reemplaza con tu llave pública

// Referencias a elementos del DOM
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");

// Evento de envío del formulario
document.getElementById("join-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm('service_t0l5jd4', 'template_cw6sjzc', this)
        .then(() => {
            showModal("Mensaje enviado", "¡Tu solicitud ha sido enviada con éxito!");
            this.reset();
        })
        .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
            showModal("Error", "Hubo un problema al enviar la solicitud. Inténtalo de nuevo.");
        });
});

// Mostrar modal y ocultarlo después de 3 segundos
function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.classList.add("show"); // Añadir clase para mostrar el modal

    // Ocultar el modal automáticamente después de 3 segundos
    setTimeout(() => {
        modal.classList.remove("show"); // Quitar clase para ocultar el modal
    }, 3000); // 3000 ms = 3 segundos
}


