const { Libro } = require('../models');

// GET /api/tasks - Obtener todas las tareas
const getAllLibro = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    const where = {};
    if (status) where.status = status;
    
    const offset = (page - 1) * limit;
    
    const { count, rows: libros } = await Libro.findAndCountAll({
      where,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['createdAt', 'DESC']]
    });
    
    res.json({
      libros,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: count,
        totalPages: Math.ceil(count / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching libros', message: error.message });
  }
};

const getLibroByGenero = async (req, res) => {
  try {
    const { genero } = req.params;
    const libro = await Libro.findByPk(genero);
    
    if (!libro) {
      return res.status(404).json({ error: 'Libro not found' });
    }
    
    res.json({ libro });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching libro', message: error.message });
  }
};

const createLibro = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    
    const libro = await Libro.create({
      title,
      description,
      status: status || 'pending'
    });
    
    res.status(201).json({ 
      message: 'Libro created successfully',
      libro 
    });
  } catch (error) {
    res.status(400).json({ error: 'Error creating libro', message: error.message });
  }
};
const updateLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    
    const libro = await Libro.findByPk(id);
    if (!libro) {
      return res.status(404).json({ error: 'libro not found' });
    }
    
    const updatedLibro = await libro.update({
      title: title || libro.title,
      description: description !== undefined ? description : libro.description,
      status: status || libro.status
    });
    
    res.json({
      message: 'Libro updated successfully',
      libro: updatedLibro
    });
  } catch (error) {
    res.status(400).json({ error: 'Error updating libro', message: error.message });
  }
};

module.exports = {
  getAllLibro,
  getLibroByGenero,
  createLibro,
  updateLibro
};