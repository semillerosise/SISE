// Definimos un array de componentes electrónicos
const componentes = [
    {
        nombre: "LED",
        descripcionCorta: "Un LED (Diodo Emisor de Luz) es un componente electrónico que emite luz cuando pasa corriente eléctrica a través de él.",
        descripcionLarga: "Los LED son dispositivos semiconductores que emiten luz cuando la corriente pasa a través de ellos. Son ampliamente utilizados en displays, iluminación y señales.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/LEDs.jpg/1200px-LEDs.jpg"
    },
    {
        nombre: "Módulo ESP32",
        descripcionCorta: "Módulo ESP32 es una placa de desarrollo que incluye WiFi y Bluetooth.",
        descripcionLarga: "El ESP32 es un microcontrolador con soporte para WiFi y Bluetooth, ideal para proyectos IoT y sistemas embebidos.",
        imagen: "https://www.sigmaelectronica.net/wp-content/uploads/2019/03/ESP-32.jpg"
    },
    {
        nombre: "LCD 16x2 con módulo I2C",
        descripcionCorta: "Pantalla LCD 16x2 con módulo I2C para proyectos de microcontroladores.",
        descripcionLarga: "El LCD 16x2 con módulo I2C permite mostrar texto en pantalla de 16 caracteres por 2 líneas, siendo ideal para proyectos donde se necesite una interfaz visual simple.",
        imagen: "https://www.ukrabot.cl/wp-content/uploads/2020/09/lcd.jpg"
    },
    {
        nombre: "Buzzer",
        descripcionCorta: "Un buzzer es un dispositivo utilizado para emitir sonido en proyectos electrónicos.",
        descripcionLarga: "El buzzer puede ser utilizado para alertar o emitir sonidos de acuerdo con las condiciones del sistema, como en alarmas o señales acústicas.",
        imagen: "https://sumador.com/cdn/shop/products/Buzzeractivo-12V_12x9.5mm-min_5b2cb190-6896-49a4-ad93-bb991bc0db8f_grande.jpg?v=1589409467"
    },
    {
        nombre: "RFID y tarjetas NFC",
        descripcionCorta: "El sistema RFID permite la identificación de objetos sin contacto físico.",
        descripcionLarga: "El RFID y las tarjetas NFC se utilizan para aplicaciones de identificación, como control de acceso y pagos sin contacto.",
        imagen: "https://moviltronics.com/wp-content/uploads/2016/01/852-thickbox_default-Modulo-RFID-NFC.jpg"
    },
    {
        nombre: "Sensores de Temperatura (DHT22)",
        descripcionCorta: "Sensor de temperatura y humedad digital con alta precisión.",
        descripcionLarga: "El sensor DHT22 mide tanto la temperatura como la humedad relativa del aire, con un rango adecuado para aplicaciones en interiores y exteriores.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgdyJ6FQYf8-7cwgY31caU6Syfp-mMeuFhw&s"
    },
    {
        nombre: "Servomotor",
        descripcionCorta: "Un servomotor permite el control de la posición angular de un objeto.",
        descripcionLarga: "Los servomotores son utilizados en aplicaciones como robótica, cámaras de seguridad y sistemas de control automatizado, donde se necesita precisión en el movimiento.",
        imagen: "https://www.steren.com.co/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/196043d46/micro-servomotor-con-torque-de-1-8-kgf-cm.jpg"
    },
    {
        nombre: "Ventilador",
        descripcionCorta: "Un ventilador es un dispositivo que mueve aire para enfriar o ventilar espacios.",
        descripcionLarga: "Los ventiladores son esenciales en sistemas de refrigeración, tanto en dispositivos electrónicos como en ambientes para mantener una temperatura adecuada.",
        imagen: "https://ae01.alicdn.com/kf/S69bed19a89224016a10122497fe4ae775.jpg_640x640q90.jpg"
    }
];

// Número de cards que se deben mostrar por defecto
const cardsPorPagina = 2;
let paginaActual = 0; // Inicialmente mostramos las primeras cards

// Función para cargar las cards dinámicamente
function cargarCards() {
    const slider = document.getElementById("slider-components");
    slider.innerHTML = ''; // Limpiamos el contenido anterior

    // Determinar el rango de cards a mostrar
    const inicio = paginaActual * cardsPorPagina;
    const fin = inicio + cardsPorPagina;

    // Si llegamos al final, reiniciamos al inicio
    if (paginaActual >= Math.ceil(componentes.length / cardsPorPagina)) {
        paginaActual = 0; // Volver al inicio
    }

    // Si estamos al principio y retrocedemos, vamos al final
    if (paginaActual < 0) {
        paginaActual = Math.ceil(componentes.length / cardsPorPagina) - 1; // Ir al último grupo
    }

    const componentesPagina = componentes.slice(
        paginaActual * cardsPorPagina,
        paginaActual * cardsPorPagina + cardsPorPagina
    );

    componentesPagina.forEach((componente, index) => {
        // Crear el contenedor de la card
        const card = document.createElement("div");
        card.classList.add("card-components");

        // Crear el contenido de la card
        const cardHTML = `
            <img src="${componente.imagen}" alt="${componente.nombre}" class="card-image-components">
            <h3 class="card-title-components">${componente.nombre}</h3>
            <p class="card-description-components">${componente.descripcionCorta}</p>
            <button class="view-more-btn-components" data-index="${paginaActual * cardsPorPagina + index}">Ver más</button>
        `;

        card.innerHTML = cardHTML;
        slider.appendChild(card);
    });

    // Habilitar o deshabilitar los botones de navegación
    document.getElementById("prev-btn").disabled = false;
    document.getElementById("next-btn").disabled = false;
}

// Función para mostrar el modal
function mostrarModal(index) {
    const modal = document.getElementById("component-modal");
    const modalTitle = document.getElementById("modal-title-components");
    const modalDescription = document.getElementById("modal-description-components");
    const modalImage = document.getElementById("modal-image-components");

    const componente = componentes[index];

    modalTitle.textContent = componente.nombre;
    modalDescription.textContent = componente.descripcionLarga;
    modalImage.src = componente.imagen;

    modal.classList.add("modal-open"); // Añadimos la clase para mostrar el modal
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById("component-modal");
    modal.classList.remove("modal-open"); // Eliminamos la clase para ocultar el modal
}

// Función para ir a la página anterior
function paginaAnterior() {
    paginaActual--;
    cargarCards();
}

// Función para ir a la siguiente página
function paginaSiguiente() {
    paginaActual++;
    cargarCards();
}

// Inicialización de la página
document.addEventListener("DOMContentLoaded", () => {
    cargarCards();

    // Evento para abrir el modal cuando se hace clic en "View More"
    document.getElementById("slider-components").addEventListener("click", (e) => {
        if (e.target.classList.contains("view-more-btn-components")) {
            const index = e.target.getAttribute("data-index");
            mostrarModal(index);
        }
    });

    // Evento para cerrar el modal
    document.getElementById("close-modal").addEventListener("click", cerrarModal);

    // Eventos de los botones de navegación con íconos
    document.querySelector("#prev-btn i").addEventListener("click", paginaAnterior);
    document.querySelector("#next-btn i").addEventListener("click", paginaSiguiente);
});