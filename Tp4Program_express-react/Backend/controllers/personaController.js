const { obtenerPersonas } = require('../models/personaModel');

const getPersonas = (req, res) => {
  try {
    const personas = obtenerPersonas();
    res.status(200).json({
      success: true,
      data: personas,
      message: 'Personas obtenidas correctamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las personas',
      error: error.message
    });
  }
};

module.exports = {
    getPersonas
};