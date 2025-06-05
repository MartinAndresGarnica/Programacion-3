const {Router} = require('express');
const TurnosViewController = require('../controllers/views/turnos.views.controller.js');

const rutaTurnosViews = Router();

rutaTurnosViews.get('/', TurnosViewController.mostrarTurnos);

module.exports = rutaTurnosViews;