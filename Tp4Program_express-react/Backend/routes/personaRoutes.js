const express = require('express');
const { getPersonas } = require('../controllers/personaController');

const router = express.Router();

// Ruta GET /personas
router.get('/personas', getPersonas);

module.exports = router;