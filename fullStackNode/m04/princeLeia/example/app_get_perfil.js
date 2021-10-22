const express = require('express')
const  app = express()

let saludo = "Bienvenido/a, ahora estamos en tu perfil"

app.get( "/perfil",(req, res)=>{
    res.send(saludo)
});