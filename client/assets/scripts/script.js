var btnSubmit = document.querySelector("#btn-submit")

async function register() {
    let user = document.querySelector('#user').value
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let pass = document.querySelector('#password').value


    console.log(user, name, email, pass)
    await axios.post("http://localhost:3000/register", {
            user,
            name,
            email,
            pass
        })
        .then((res) => {
            console.log("Response of success: -----------------------" + JSON.stringify(res))
        })
        .catch((error) => {
            console.log(error.toJSON());
        })
}

btnSubmit.addEventListener('click', register)