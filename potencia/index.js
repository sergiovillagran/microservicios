const express = require('express')
const powController = require('./controller/pow')
const PORT = 3000

const app = express()

app.get('/potencia/:base/:exponent', powController);

app.listen(PORT, () => {
    console.log(`Servidor de potenciacion corriendo en el puerto ${PORT}`)
})