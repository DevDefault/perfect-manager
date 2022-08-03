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


module.exports = router;