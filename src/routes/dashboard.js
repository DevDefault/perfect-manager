const express = require('express');
// const session = require('express-session')

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.session)

    if (req.session.login == true) {
        return res.render('dashboard/index')
    }
    
    res.send('Authentication Failed');
});

router.get('/products', (req, res) => {
    res.render('dashboard/products/index')
})


module.exports = router;