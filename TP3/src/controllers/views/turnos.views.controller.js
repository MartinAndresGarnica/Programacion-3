const turnosModel = require("./../../models/mock/turnos.models.js");
const pacientesModel = require("./../../models/mock/pacientes.models.js");

class TurnosViewController {
    async mostrarTurnos(req, res) {
        try {
            const turnos = await turnosModel.list();
            const pacientes = await pacientesModel.list();

            const turnosPaciente = turnos.map(turno => {
                const paciente = pacientes.find(paciente => paciente.id === turno.idPaciente);
                return { ...turno, nombrePaciente: paciente ? `${paciente.nombre} ${paciente.apellido}` : 'Paciente no encontrado' };
            });

            res.render('turnos/index', { turnos: turnosPaciente });
        } catch (error) {
            res.status(500).send("Error al obtener los turnos");
        }
    }

    async formularioTurno(req, res) {
        try {
            const pacientes = await pacientesModel.list();
            res.render('turnos/formulario', { pacientes });
        } catch (error) {
            res.status(500).send("Error al cargar el formulario");
        }
    }

    async formAsignarPaciente(req, res) {
        try {
            const idTurno = req.params.id;
            const turno = await turnosModel.findById(idTurno);
            if (!turno) {
                return res.status(404).send("Turno no encontrado");
            }

            const pacientes = await pacientesModel.list();
            res.render('turnos/asignar', { turno, pacientes });
        } catch (error) {
            res.status(500).send("Error al cargar el formulario de asignación");
        }
    }

    async asignarPaciente(req, res) {
        try {
            const idTurno = req.params.id;
            const { idPaciente } = req.body;
            const turno = await turnosModel.findById(idTurno);
            if (!turno) {
                return res.status(404).send("Turno no encontrado");
            }
            turno.idPaciente = Number(idPaciente);
            turno.estado = "Reservado";
            await turnosModel.update(idTurno, turno);
            res.redirect('/turnos');
        } catch (error) {
            res.status(500).send("Error al asignar paciente al turno");
        }
    }

    async crearTurno(req, res) {
        try {
            const { idPaciente, fecha, motivo } = req.body;
            const nuevosTurnos = await turnosModel.list();
            const newId = nuevosTurnos.length > 0 ? Math.max(...nuevosTurnos.map(t => t.id)) + 1 : 1;

            const nuevoTurno = {
                id: newId,
                idPaciente: idPaciente ? Number(idPaciente) : null,
                fecha: new Date(fecha),
                motivo: motivo || "",
                estado: idPaciente ? "Reservado" : "Disponible"
            };
            turnosModel.data.push(nuevoTurno);

            res.redirect('/turnos');
        } catch (error) {
            res.status(500).send("Error al crear el turno");
        }
    }

    async cancelarTurno(req, res) {
        try {
            const id = req.params.id;
            const eliminado = await turnosModel.cancelarTurno(id);
            if (!eliminado) {
                return res.status(404).send('Turno no encontrado');
            }
            res.redirect('/turnos');
        } catch (error) {
            res.status(500).send('Error al cancelar turno');
        }
    }
}

module.exports = new TurnosViewController();
