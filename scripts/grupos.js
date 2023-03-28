
let grupos = JSON.parse(localStorage.getItem('grupos'))
console.log(grupos)
let container = document.querySelector(".card-container");
for (let grupo of grupos) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card");
    let tarjetaHtml = `
        
                <h2>${grupo.descripcion}</h2>
                <button class="btn" type="submit">Mostrar más</button>
        
                `
    tarjeta.innerHTML = tarjetaHtml;
    container.appendChild(tarjeta)

}

