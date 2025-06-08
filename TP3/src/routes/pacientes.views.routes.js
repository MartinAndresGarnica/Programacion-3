const { Router } = require('express');
const pacientesModel = require('../models/mock/pacientes.models.js');
const Paciente = require('../models/mock/entities/paciente.entity.js');
const router = Router();


router.get('/', async (req, res) => {
    const pacientes = await pacientesModel.list();
    res.render('pacientes/index', { pacientes });
});

router.get('/asignar/:turnoId', async (req, res) => {
    const turnoId = req.params.turnoId;
    const pacientes = await pacientesModel.list();
    res.render('pacientes/asignar', { turnoId, pacientes });
});

router.get('/nuevo', (req, res) => {
    res.render('pacientes/nuevo');
});

router.post('/nuevo', async (req, res) => {
    try {
        const { dni, nombre, apellido, email, password, confirm_password } = req.body;

        if (password !== confirm_password) {
        return res.status(400).send("Las contraseñas no coinciden");
        }

        if (!dni || !nombre || !apellido || !email || !password) {
        return res.status(400).send("Faltan datos obligatorios");
        }

        const nuevoPaciente = new Paciente(dni, nombre, apellido, email, password);
        await pacientesModel.create(nuevoPaciente);

        res.redirect('/pacientes');
    } catch (error) {
        console.error("Error al registrar paciente:", error);
        res.status(500).send("Error al registrar paciente: " + error.message);
    }
});

router.post('/asignar/:turnoId', async (req, res) => {
    const turnoId = req.params.turnoId;
    const { pacienteId } = req.body;

    try {
        const turno = await turnosModel.findById(turnoId);
        if (!turno) {
        return res.status(404).send('Turno no encontrado');
        }
        turno.idPaciente = pacienteId;
        await turnosModel.update(turnoId, turno);
        res.redirect('/turnos');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al asignar paciente al turno');
    }
});

router.post('/:id/delete', async (req, res) => {
    const id = req.params.id;
    try {
        await pacientesModel.delete(id);
        res.redirect('/pacientes');
    } catch (error) {
        res.status(500).send("Error al eliminar paciente");
    }
});

router.post('/', async (req, res) => {
    const paciente = req.body;
    try {
        await pacientesModel.create(paciente);
        res.redirect('/pacientes');
    } catch (error) {
        res.status(500).send("Error al crear paciente");
    }
});

module.exports = router;
