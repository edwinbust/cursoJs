const express = require('express')
const  app = express()

let   producto = {
	  tipoProducto: null ,
	  precio: null ,
	  cantidad: null};
app.get ( "/producto/agregar", (req, res)=> {res.send( producto)});

