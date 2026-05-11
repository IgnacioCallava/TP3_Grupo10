const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); 

// Una ruta de prueba para ver en Render
app.get('/', (req, res) => {
    res.send('🚗 ¡La API de la Concesionaria está en línea!');
});

module.exports = app;