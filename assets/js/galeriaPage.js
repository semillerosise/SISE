document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los elementos de imagen
    const images = document.querySelectorAll('.gallery-item img');
    
    // Obtener el modal y el contenido de la imagen
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close-btn');
    
    // Agregar un evento de clic a cada imagen
    images.forEach(image => {
        image.addEventListener('click', (e) => {
            // Mostrar el modal y cambiar la imagen al tamaño real
            modal.style.display = 'flex';
            modalImg.src = e.target.src; // Cambiar la fuente de la imagen del modal
        });
    });

    // Cerrar el modal cuando se hace clic en la "X"
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal si se hace clic fuera de la imagen
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
