var btnSubmit = document.querySelector("#btn-submit")

async function register(e) {
    e.preventDefault()
    const { user, name, email, password } = document.querySelector('form')

    await axios.post("http://localhost:3000/register", {
            user: user.value,
            name: name.value,
            email: email.value,
            password: password.value
        })
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error.message);
        })
}

btnSubmit.addEventListener('click', register)