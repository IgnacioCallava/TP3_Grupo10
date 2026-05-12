const express = require('express');
const cors = require('cors');
const { getServicios, getServicioById } = require('./controllers/servicioController');
const { getEquipo } = require('./controllers/equipoController');
const { getPerfil } = require('./controllers/usuariosController');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('assets')); 

app.get('/', (req, res) => {
    res.send('¡La API de la Concesionaria está en línea!');
});

app.get('/servicios', getServicios);
app.get('/servicios/:id', getServicioById);
app.get('/equipo', getEquipo);
app.get('/perfil/:id', getPerfil);

module.exports = app;