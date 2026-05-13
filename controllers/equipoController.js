const fs = require('fs').promises;

const getEquipo = async (req, res) => {
  try {
    const data = await fs.readFile('./data/equipo.json', 'utf8');
    const equipo = JSON.parse(data);

    res.json(equipo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el equipo' });
  }
};

module.exports = { getEquipo };