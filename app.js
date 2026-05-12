const express = require('express');
const cors = require('cors');
const servicios = require('./data/servicios.json');
const equipo = require('./data/equipo.json');
const usuarios = require('./data/usuarios.json');

const app = express();

app.use(cors());
app.use(express.json()); 

// Una ruta de prueba para ver en Render
app.get('/', (req, res) => {
    res.send('🚗 ¡La API de la Concesionaria está en línea!');
});

app.get('/servicios', (req, res) => {
    res.json(servicios);
});

app.get('/servicios/:id', (req, res) => {
    const id = req.params.id;
    const servicio = servicios.find(s => s.id == id);

    if (!servicio) {
        return res.status(404).json({ mensaje: 'Servicio no encontrado' });
    }

    res.json(servicio);
});

app.get('/equipo', (req, res) => {
    res.json(equipo);
});

app.get('/perfil/:id', (req, res) => {
    const id = req.params.id;

    const usuario = usuarios.find(u => u.id == id);

    if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const perfil = {
        nombre: usuario.nombre,
        mail: usuario.mail,
        fecha_registro: usuario.fecha_registro,
        foto: usuario.foto,
        ultimos_pedidos: usuario.ultimos_pedidos.slice(-3)
    };

    res.json(perfil);
});

module.exports = app;