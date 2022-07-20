const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../model/user');

const SECRET = 'Muguet'

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token']

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            res.sendStatus(401).end()
        }

        req.userId = decoded.userId
        next()
    })
}

router.post('/signup', async(req, res) => {
    try {

        const { user, name, email, password } = req.body

        console.log(user, name, email, password)

        const [row, created] = await User.findOrCreate({
            where: {
                user
            },
            where: {
                email
            },
            defaults: {
                user,
                name,
                email,
                password
            }
        })

        if (created == true) {
            res.status(201)
            res.send('Cadastro concluído com sucesso!')
                // res.render('/')
        } else {
            res.send('Usuário ou e-mail já cadastrado.')
        }

    } catch (error) {
        console.log(error)
    }
});

router.get('/signup', (req, res) => {
    res.render('./signup/index')

});

router.post('/signin', async(req, res) => {
    const { user, password } = req.body

    const login = await User.findAll({ where: { user, password } })
    if (!login.length) {
        res.json({ auth: false, message: "Usuário ou senha inválido" })

    } else {
        const token = jwt.sign({ userId: login[0].id }, SECRET)
        res.json({ auth: true, token, message: "Logado com sucesso!" })
    }
});

router.get('/', async(req, res) => {
    res.render('./signin/index')

});


module.exports = router;