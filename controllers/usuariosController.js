const fs = require('fs').promises;

const getPerfil = async (req, res) => {
  try {
    const data = await fs.readFile('./data/usuarios.json', 'utf8');
    const usuarios = JSON.parse(data);

    const { id } = req.params;
    const usuario = usuarios.find(u => u.id === parseInt(id));

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
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener perfil' });
  }
};

module.exports = { getPerfil };