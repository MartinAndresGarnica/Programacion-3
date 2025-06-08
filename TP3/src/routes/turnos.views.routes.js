const {Router} = require('express');
const TurnosViewController = require('../controllers/views/turnos.views.controller.js');

const rutaTurnosViews = Router();

rutaTurnosViews.get('/', TurnosViewController.mostrarTurnos);
rutaTurnosViews.get('/asignar/:id', TurnosViewController.formAsignarPaciente);
rutaTurnosViews.get('/nuevo', TurnosViewController.formularioTurno);
rutaTurnosViews.post('/asignar/:id', TurnosViewController.asignarPaciente);
rutaTurnosViews.post('/nuevo', TurnosViewController.crearTurno);
rutaTurnosViews.delete('/:id', TurnosViewController.cancelarTurno);

module.exports = rutaTurnosViews;