const express = require('express')
require('dotenv').config()

const app = express();

let count = 0

app.get('/', (_req, res) => {
    res.status(200).send('<h1>Bienvenidos al servidor express</h1>')
})

app.get('/visitas', (_req, res) => {
    count = count + 1
    res.status(200).send(`Visitas: ${count}`)
})

app.get('/fyh', (_req, res) =>{
    const fyh = `${new Date().toLocaleDateString()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    const rtaJson = {
        fyh
    }
    res.status(202).json(rtaJson)
})

app.get('/ping', (_req, res) => {
    res.status(200).send("<h1>pong</h1>")
})

const PORT= process.env.PORT || 3000

app.listen(PORT, () => {
    console.info(`Servidor prendido y corriendo en el Puerto ${PORT}`)
})

