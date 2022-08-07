const auth = (req, res, next) => {
    if (req.session.login !== true) {
        return next()
    }

    res.send('Authentication Failed');
}

module.exports = auth