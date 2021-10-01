const express = require('express');
const app = express();
app.listen(3000, () => console.log('Esto fue exitoso'));
//app.get  ("/home", (req, res)=> {  res.send( "Hola, estamos en el home" );});
app.get  ("/producto/agregar", (req, res)=> {  
	let producto = {tipoProducto:'null', precio:'null', cantidad:'null'};
	res.send( producto );});
