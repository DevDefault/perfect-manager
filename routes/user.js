const express = require('express')
const router = express.Router()
const User = require('../model/user');


router.post('/signup', async(req, res) => {
    const { user, name, email, password } = req.body

    console.log(user, name, email, password)

    const register = await User.findOrCreate({
        where: {
            user: user
        },
        where: {
            email: email
        },
        defaults: {
            user,
            name,
            email,
            password
        }
    })



    // console.log(register[1])

    if (register[1] == true) {
        res.status(201)
        res.send('Ae caraaai agora tu tem uma conta fdp 🎉')
    } else {
        res.send('Pourra burrão, bota outro nome ai crlh 🤦‍♂️ ')
    }


    // console.log(register)
    // res.send(req.body)
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