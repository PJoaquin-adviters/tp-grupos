let integrantes = JSON.parse(localStorage.getItem('integrantes'));

console.log(integrantes)

let container = document.querySelector(".integrantes-container");

function cargarIntegrantes() {
    for (let integrante of integrantes) {
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card");
        let tarjetaHtml = `
        <li><span>Nombre: </span>${integrante.nombre}</li>
        <li><span>Apellidos: </span>${integrante.apellido}</li>
        <li><span>Telefono: </span>${integrante.telefono}</li>
        <li><span>Email: </span>${integrante.email}</li>
    
                    `
        tarjeta.innerHTML = tarjetaHtml;
        container.appendChild(tarjeta);

    }
}

cargarIntegrantes()