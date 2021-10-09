const express = require('express')
const path = require('path')
const  app = express()
const publicPath =path.resolve (__dirname,'./public');
app.use(express.static(publicPath));


app.listen(3030, () => {
	console.log('Servidor corriendo en el puerto 3030')
});

let m404 = "Error página no encontrada"
app.get('/404', (req, res) => {
                res.send(m404);
});
app.get('/', (req, res) => {
            res.sendFile (path.join(__dirname, './views/index.html'));
});

app.get('/babbage', (req, res) => {
            res.sendFile (path.join(__dirname, './views/babbage.html'));
});

app.get('/berners-lee', (req, res) => {
            res.sendFile (path.join(__dirname, './views/berners-lee.html'));
});

app.get('/hamilton', (req, res) => {
            res.sendFile (path.join(__dirname, './views/hamilton.html'));
});

app.get('/hopper', (req, res) => {
            res.sendFile (path.join(__dirname, './views/hopper.html'));
});

app.get('/lovelace', (req, res) => {
            res.sendFile (path.join(__dirname, './views/lovelace.html'));
});

app.get('/turing', (req, res) => {
            res.sendFile (path.join(__dirname, './views/turing.html'));
});

