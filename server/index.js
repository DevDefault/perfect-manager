const cors = require('cors')
const express = require('express')

const app = express()
const db = require('./database/db');
const User = require('./model/register');

// ROUTES
let userRoute = require('./routes/user')

const port = 3000

app.use(express.json())
app.use(cors())

app.use('/', userRoute)

app.listen(port, async() => {
    try {
        const resultado = await db.sync();
        // console.log(resultado);
    } catch (error) {
        console.log(error);
    }
    console.log(`Rodando na porta: ${port}`)
})