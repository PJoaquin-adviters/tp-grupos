
let url = "https://bootcamp-adviters.herokuapp.com";
// let token = 1232323;


const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('idEmail').value;
    let password = document.getElementById('idPassword').value;

    // Realiza la autenticación aquí, por ejemplo, verificando que las credenciales sean correctas.
    fetch(url + "/login",
        {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({

                "email": email,
                "password": password

            })
        })
        .then(res => res.json())
        .then(data => {
            let token = data.accessToken.stsTokenManager.accessToken;
            localStorage.setItem('localToken', token);
            localStorage.setItem('data', JSON.stringify(data))
            getGrupo(token)

        }
        )
        .catch(err => console.log(err))
});





function getGrupo(token) {

    fetch(url + "/grupos",
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
            localStorage.setItem('grupos', JSON.stringify(data));
            window.open(
                "views/grupos.html", "_blank");
        })
        .catch(err => console.error(err));

}