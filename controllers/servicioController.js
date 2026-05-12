const fs = require('fs').promises;

const getServicios = async (req, res) => {
  try {
    const data = await fs.readFile('./data/servicios.json', 'utf8');
    const servicios = JSON.parse(data);

    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer servicios' });
  }
};

const getServicioById = async (req, res) => {
  try {
    const data = await fs.readFile('./data/servicios.json', 'utf8');
    const servicios = JSON.parse(data);

    const { id } = req.params;
    const servicio = servicios.find(s => s.id === parseInt(id));

    if (!servicio) {
      return res.status(404).json({ mensaje: 'Servicio no encontrado' });
    }

    res.json(servicio);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el servicio' });
  }
};

module.exports = { getServicios, getServicioById };