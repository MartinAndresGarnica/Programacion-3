const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller.js');
const {verifyTokenMiddleware} = require('../middlewares/verifyToken.middleware.js');
const turnoSchema = require('../schemas/turno.schema.js');
const {validate} = require('../middlewares/validate.js');    

const rutaTurnos = Router();

rutaTurnos.get('/', turnosController.list);
rutaTurnos.get('/:idPaciente',verifyTokenMiddleware ,validate(turnoSchema.getByIdPaciente, "params"), turnosController.getTurnosByIdPaciente);
rutaTurnos.post('/nuevo', turnosController.crearTurno);
rutaTurnos.delete('/:idTurno', verifyTokenMiddleware, turnosController.cancelarTurno);
module.exports = rutaTurnos;