const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

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

router.get('/', verifyJWT, (req, res) => {
    res.render('./dashboard/index')

});


module.exports = router;