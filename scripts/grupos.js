let url = "https://bootcamp-adviters.herokuapp.com";
let grupos = JSON.parse(localStorage.getItem('grupos'))
let token = localStorage.getItem('localToken');
let collection = JSON.parse(localStorage.getItem('data'))

let container = document.querySelector(".card-container");

function cargarTarjetas() {
    for (let grupo of grupos) {
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card");
        let tarjetaHtml = `
            
                    <h2 class="grupo-titulo">${grupo.descripcion}</h2>
                    <button class="btn" type="submit">Mostrar más</button>
            
                    `
        tarjeta.innerHTML = tarjetaHtml;
        container.appendChild(tarjeta);

    }

    let btnAll = document.querySelectorAll(".btn")
    btnAll.forEach(el => el.addEventListener("click", (e) => getGroupDetails(e)))

}


cargarTarjetas();

function getGroupDetails(e) {
    let card = e.target.closest(".card");
    let titulo = card.querySelector(".grupo-titulo").innerHTML;

    let grupo = grupos.find(el => el.descripcion == titulo)
    console.log(grupo)

    fetch(url + "/grupos/" + grupo.id,
        {
            headers: {
                "content-type": "application/json",
                Authorization: `bearer ${token}`
            }
        }
    )

        .then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('integrantes', JSON.stringify(data));
            window.open(
                "info.html", "_blank");
        })
        .catch(err => console.error(err));


}

