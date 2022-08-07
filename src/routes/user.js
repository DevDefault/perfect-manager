const express = require('express');
// const session = require('express-session')
const router = express.Router();
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
            // res.status(201)
            res.json({
                    status: 201,
                    message: "Cadastro concluído com sucesso!",
                    redirect: "/"
                })
                // res.redirect('signin/index')
        } else {
            res.json({ message: "Usuário ou e-mail já cadastrado." })
        }

    } catch (error) {
        console.log(error)
    }
});

router.get('/signup', (req, res) => {
    res.render('signup/index')

});

router.get('/', async(req, res) => {
    res.render('signin/index')
});

router.post('/signin', async(req, res) => {
    const { user, password } = req.body

    const login = await User.findAll({ where: { user, password } })

    if (!login.length) {
        return res.json({ auth: false, message: "Usuário ou senha inválido" })
    }

    req.session.login = true;

    res.json({
        auth: true,
        message: "Logado com sucesso!",
        redirect: '/dashboard'
    })

});

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy();
        res.render('signin/index')
    }
})


module.exports = router;