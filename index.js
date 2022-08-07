const cors = require('cors')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
const db = require('./src/database/db');
const User = require('./src/model/user');


app.set('view engine', 'ejs')
app.set('views', './theme/views')

// ROUTES
let userRoute = require('./src/routes/user')
let dashboardRoute = require('./src/routes/dashboard')
let productRoute = require("./src/routes/product")

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}))

app.use('/assets', express.static('./theme/assets'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())
app.use(cors())

app.use('/', userRoute)
app.use('/dashboard', dashboardRoute)
app.use('/products', productRoute)

app.listen(process.env.PORT, async() => {
    try {
        const result = await db.sync();
        // console.log(resultado);
    } catch (error) {
        console.log(error);
    }
    console.log(` http://localhost:${process.env.PORT}`)
})