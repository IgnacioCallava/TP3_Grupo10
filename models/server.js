require('dotenv').config();
const app = require('../app'); 

// Usamos el puerto de Render, o el 3000 si estamos en la compu
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor encendido en el puerto ${PORT}`);
});