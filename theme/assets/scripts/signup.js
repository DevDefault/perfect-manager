var btnSubmit = $("#btn-submit")

async function register(e) {
    // console.log(e)
    // e.preventDefault()
    const { user, name, email, password } = document.querySelector('form#sigupForm')

    // console.log($('#sigupForm'))
    await axios.post("http://localhost:3000/signup", {
            user: user.value,
            name: name.value,
            email: email.value,
            password: password.value
        })
        .then((res) => {
            if (res.status == 201) {
                Notiflix.Notify.success('Cadastrado com sucesso!', { position: 'center-bottom', timeout: 5000 });
            } else {
                Notiflix.Notify.failure('Usuário ou email já cadastrado', { position: 'center-bottom', timeout: 5000 });
            }
        })
        .catch((error) => {
            console.log(error.message);
        })
}

$('form#sigupForm').submit(register)