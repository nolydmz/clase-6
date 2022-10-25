const http = require ('http');
require('dotenv').config();

const resPong = (_req, res) => {
    res.end("<h1>PONG</h1>")
}

const saludar = (_req, res) => {
    const reqHour = new Date().getHours()

    if(reqHour > 5 && reqHour <13){
        res.end("<h2>Buenos Dias</h2>")
    }else if(reqHour > 12 && reqHour < 20){
        res.end("<h2>Buenas Tardes</h2>")
    }else{
        res.end("<h2>Buenas Noches</h2>")
    }
}


const server = http.createServer ((req, res) => {
    switch(req.url){
        case '/ping':
            resPong(req, res)
            break
        case '/saludo':
            saludar(req, res)
            break
        default:
            res.end("No hay nada para mostrar");
    }
})

const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`Servidor http escuchado en el puerto ${PORT}`)
})