const express = require("express")
const router = express.Router()
const auth = require('./auth')

router.get("/", auth, (req, res) => {
    res.render('dashboard/products/index')
})

router.post("/", (req, res) => {
    console.log(req.body)
})

module.exports = router