const express = require('express')
const  app = express()

app.get  ("/home", (req, res)=> {
    res.send( "Hola, estamos en el home" );
    });
