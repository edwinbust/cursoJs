const express = require('express')
const path = require('path')
const  app = express()

app.listen(3000, () => {
	console.log('Servidor corriendo en el puerto 3000')
});

let m404 = "Error página no encontrada"
app.get('/404', (req, res) => {
                res.send(m404);
});
app.get('/', (req, res) => {
            res.sendFile (path.join(__dirname, '/views/home.html'));
});