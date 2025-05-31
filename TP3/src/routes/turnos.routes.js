const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller.js');
const {verifyTokenMiddleware} = require('../middlewares/verifyToken.middleware.js');
const turnoSchema = require('../schemas/turno.schema.js');
const {validate} = require('../middlewares/validate.js');    

const rutaTurnos = Router();

rutaTurnos.get('/', turnosController.list);
rutaTurnos.get('/:idPaciente', turnosController.getTurnosByIdPaciente);

module.exports = rutaTurnos;