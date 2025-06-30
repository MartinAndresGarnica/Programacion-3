const Express = require('express');
const router = Express.Router();
const { getAllLibro, getLibroByGenero, createLibro, updateLibro, deleteLibro } = require('../controllers/libro.controller');

router.get('/', getAllLibro);
router.get('/:genero', getLibroByGenero);
router.post('/', createLibro);
router.put('/:id', updateLibro);
router.delete('/:id', deleteLibro);

module.exports = router;