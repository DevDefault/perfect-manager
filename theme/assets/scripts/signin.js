var btnSubmit = $("#btn-submit")

async function login(e) {
    e.preventDefault()
    const { user, password } = document.querySelector('form#signinForm')

    const login = await axios.post("http://localhost:3000/signin", {
        user: user.value,
        password: password.value
    })
    console.log(login)
    if (login.data.auth === true) {
        localStorage.setItem("userToken", login.data.token);
        setTimeout(() => { window.location.href = "/dashboard" }, 5000)
        return Notiflix.Notify.success(login.data.message, { position: 'center-bottom', timeout: 5000 });
    }
    Notiflix.Notify.failure(login.data.message, { position: 'center-bottom', timeout: 5000 });
}

$('form#signinForm').submit(login)