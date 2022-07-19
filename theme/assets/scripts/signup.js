var btnSubmit = $("#btn-submit")

async function register(e) {
    try {
        e.preventDefault()
        const { user, name, email, password } = document.querySelector('form#sigupForm')

        // console.log($('#sigupForm'))
        const register = await axios.post("http://localhost:3000/signup", {
            user: user.value,
            name: name.value,
            email: email.value,
            password: password.value
        })

        if (register.status == 201) {
            Notiflix.Notify.success(register.data, { position: 'center-bottom', timeout: 5000 });
        } else {
            Notiflix.Notify.failure(register.data, { position: 'center-bottom', timeout: 5000 });

        }
    } catch (error) {
        console.log(error)
    }
}

$('form#sigupForm').submit(register)