function openModal(id) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    if (data[id]) {
        const person = data[id];
        let content = `
            <img src="${person.photo || '/assets/img/placeholder.png'}" alt="${person.name}" class="modal-photo">
            <h2>${person.name || "Información no disponible"}</h2>
        `;

        // Generar contenido dinámico basado en la información disponible
        Object.keys(person).forEach(key => {
            if (key !== "name" && key !== "photo" && person[key]) {
                content += `<p><strong>${capitalize(key)}:</strong> ${person[key]}</p>`;
            }
        });

        modalBody.innerHTML = content;
    } else {
        modalBody.innerHTML = "<p>Información no disponible.</p>";
    }

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Capitalizar la primera letra de las claves
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/([A-Z])/g, " $1");
}
