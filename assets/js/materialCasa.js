document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".access-form");
    const inputCode = form.querySelector(".input-code");
    const errorMessage = form.querySelector(".error-message");

    // Añadir un guion permanente en el campo
    inputCode.addEventListener("input", (event) => {
        const value = event.target.value.replace(/[^A-Za-z0-9]/g, ""); // Eliminar caracteres no alfanuméricos
        let formattedValue = "";

        // Reemplazar las posiciones respectivas
        if (value.length > 4) {
            formattedValue = `${value.slice(0, 4).toUpperCase()}-${value.slice(4, 8)}`;
        } else if (value.length > 0) {
            formattedValue = `${value.toUpperCase()}-`; // Muestra el guion fijo si hay texto
        } else {
            formattedValue = "-"; // Guion siempre visible
        }

        event.target.value = formattedValue;

        // Limpiar el mensaje de error al escribir
        errorMessage.textContent = "";
        errorMessage.classList.remove("active");
        errorMessage.style.display = "none";
    });

    // Al cargar la página, inicializar el campo con el guion
    inputCode.value = "-";

    // Escuchar el evento 'submit'
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío predeterminado del formulario

        // Obtener el valor del campo de texto
        const accessCode = inputCode.value.trim();

        // Validar si el campo está vacío
        if (accessCode === "-" || accessCode === "") {
            showError("Por favor, ingresa tu código único.");
            return;
        }

        // Validar el formato del código (4 letras mayúsculas, un guion, 4 números)
        const codePattern = /^[A-Z]{4}-\d{4}$/; // Ejemplo: ABCD-1234
        if (!codePattern.test(accessCode)) {
            showError("Por favor, ingresa un código válido en el formato 'ABCD-1234'.");
            return;
        }

        // Redirigir al usuario a la página del dashboard
        window.location.href = `../../pages/dashboard/dashboard.html?access_code=${encodeURIComponent(accessCode)}`;
    });

    // Mostrar el mensaje de error y ocultarlo después de 1.5 segundos
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
        errorMessage.classList.add("active");

        setTimeout(() => {
            errorMessage.classList.remove("active");
            errorMessage.style.display = "none";
        }, 1500);
    }

    // Prevenir que el usuario elimine el guion
    inputCode.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && inputCode.value === "-") {
            event.preventDefault();
        }
    });
});
