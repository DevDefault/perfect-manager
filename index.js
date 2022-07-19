const cors = require('cors')
const express = require('express')

const app = express()
const db = require('./database/db');
const User = require('./model/user');

app.set('view engine', 'ejs')
app.set('views', './theme/views')

// ROUTES
let userRoute = require('./routes/user')


app.use('/assets', express.static('theme/assets'));

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