const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render('dashboard/products/index')
})

module.exports = router