const cors = require('cors')
const express = require('express')

const db = require('./database/db');
const app = express()
const User = require('./model/register');

const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', async(req, res) => {
    const { user, password } = req.body

    const login = await User.findAll({ where: { user, password } })

    // console.log(login.length)
    if (!login.length) {
        res.send('Tudo errado :facepalm')
    } else {

        console.log(login)

        console.log(user, password)

        res.send('Aeeeeeeee porra!')
    }
})

app.post('/register', async(req, res) => {
    const { user, name, email, pass } = req.body

    console.log(user, name, email, pass)

    const register = await User.findOrCreate({
        where: {
            user: user,
        },
        where: {
            name: name
        },
        where: {
            email: email
        },
        defaults: {
            user,
            name,
            email,
            password: pass
        }
    })

    console.log(register)
        // res.send(req.body)
})

app.listen(port, async() => {
    try {
        const resultado = await db.sync();
        // console.log(resultado);
    } catch (error) {
        console.log(error);
    }
    console.log(`Rodando na porta: ${port}`)
})