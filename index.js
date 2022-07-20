const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
    // const jwt = require('jsonwebtoken')

const port = 3000

const app = express()
const db = require('./database/db');
const User = require('./model/user');

app.set('view engine', 'ejs')
app.set('views', './theme/views')

// ROUTES
let userRoute = require('./routes/user')
let dashboardRoute = require('./routes/dashboard')

app.use('/assets', express.static('theme/assets'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json())
app.use(cors())

app.use('/', userRoute)
app.use('/dashboard', dashboardRoute)

app.listen(port, async() => {
    try {
        const resultado = await db.sync();
        // console.log(resultado);
    } catch (error) {
        console.log(error);
    }
    console.log(` http://localhost:${port}`)
})