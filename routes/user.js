const express = require('express')
const router = express.Router()
const User = require('../model/user');


router.post('/register', async(req, res) => {
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
        res.send('Ae caraaai agora tu tem uma conta fdp 🎉')
        res.render('./login/index');
    } else {
        res.send('Pourra burrão, bota outro nome ai crlh 🤦‍♂️ ')
    }


    // console.log(register)
    // res.send(req.body)
})

router.get('/register', (req, res) => {
    res.render('./register/index')

})

router.get('/login', async(req, res) => {
    const { user, password } = req.body

    const login = await User.findAll({ where: { user, password } })

    // console.log(login.length)
    if (!login.length) {
        res.send('Tudo errado 🤦‍♂️ ')
    } else {

        console.log(login)

        console.log(user, password)

        res.send('Aeeeeeeee porra! 🥳')
    }
})


module.exports = router