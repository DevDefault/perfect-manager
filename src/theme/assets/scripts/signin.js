var btnSubmit = $("#btn-submit")

async function login(e) {
    e.preventDefault()
    // console.log(e)
    const { user, password } = document.querySelector('form#signinForm')

    const { data } = await axios.post("/signin", {
        user: user.value,
        password: password.value
    })

    if (data.auth === true) {
        setTimeout(() => { window.location.href = data.redirect }, 1000)
        return Notiflix.Notify.success(data.message, { position: 'center-bottom', timeout: 5000 });
    }

    Notiflix.Notify.failure(data.message, { position: 'center-bottom', timeout: 5000 });
}

$('form#signinForm').submit(login)