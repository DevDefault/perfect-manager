const express = require('express');
const router = express.Router();
const auth = require('./auth')

router.get('/', auth, (req, res) => {
    res.render('dashboard/index')
});

// router.get('/products', (req, res) => {
//     res.render('dashboard/products/index')
// })


module.exports = router;