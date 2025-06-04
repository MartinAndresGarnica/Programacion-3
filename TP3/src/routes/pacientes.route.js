const {Router} = require('express');
const pacientesController = require('../controllers/API/pacientes.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');
const pacienteSchema = require('../schemas/paciente.schema.js');
const {validate} = require('../middlewares/validate.js');

const rutaPacientes = Router();

rutaPacientes.get('/',pacientesController.list);
rutaPacientes.get('/:id',verifyTokenMiddleware,validate(pacienteSchema.getById, "params"), pacientesController.getPacienteById);

rutaPacientes.post('/login',pacientesController.login)
rutaPacientes.post('/',verifyTokenMiddleware,validate(pacienteSchema.create), pacientesController.create);

rutaPacientes.put('/:id',verifyTokenMiddleware,pacientesController.update);

rutaPacientes.delete('/:id',verifyTokenMiddleware,pacientesController.delete);
//Otras rutas CRUD


module.exports = rutaPacientes;