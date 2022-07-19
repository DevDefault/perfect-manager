const express = require('express')
const router = express.Router()
const User = require('../model/user');


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
            res.send('Cadastro concluído com sucesso! 🎉')
        } else {
            res.send('Usuário ou e-mail já cadastrado. 😕')
        }

    } catch (error) {
        console.log(error)
    }
})

router.get('/signup', (req, res) => {
    res.render('./signup/index')

})

router.post('/signin', async(req, res) => {
    const { user, password } = req.body

    const login = await User.findAll({ where: { user, password } })

    // console.log(login.length)
    if (!login.length) {
        res.status(401)
        res.send('Tudo errado 🤦‍♂️ ')
    } else {

        console.log(login)

        console.log(user, password)

        res.send('Aeeeeeeee porra! 🥳')
    }
})

router.get('/', async(req, res) => {
    res.render('./signin/index')

})


module.exports = router