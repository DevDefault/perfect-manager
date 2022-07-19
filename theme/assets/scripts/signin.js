var btnSubmit = $("#btn-submit")

async function login(e) {
    e.preventDefault()
    const { user, password } = document.querySelector('form#signinForm')

    await axios.post("http://localhost:3000/signin", {
            user: user.value,
            password: password.value
        })
        .then((res) => {
            console.log(res)
            if (res.status == 200) {
                Notiflix.Notify.success('Logado com sucesso!', { position: 'center-bottom', timeout: 5000 });
                setTimeout(() => { window.location.href = "/" }, 5000)
            } else {
                Notiflix.Notify.failure('Usuário ou senha inválido.', { position: 'center-bottom', timeout: 5000 });
            }
        })
        .catch((error) => {
            console.log(error);
            Notiflix.Notify.failure('Usuário ou senha inválido.', { position: 'center-bottom', timeout: 5000 });
        })
}

$('form#signinForm').submit(login)