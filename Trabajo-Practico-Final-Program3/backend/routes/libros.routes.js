const Express = require('express');
const router = Express.Router();
const { getAllLibro, getLibroByGenero, createLibro, updateLibro } = require('../controllers/libro.controller');

router.get('/', getAllLibro);
router.get('/:genero', getLibroByGenero);
router.post('/', createLibro);
router.put('/:id', updateLibro);

module.exports = router;