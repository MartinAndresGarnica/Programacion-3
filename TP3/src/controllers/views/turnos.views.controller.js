const turnosModel = require("./../../models/mock/turnos.models.js");
const pacientesModel = require("./../../models/mock/pacientes.models.js");

class TurnosViewController{
    async mostrarTurnos(req, res) {
        try {
            const turnos = await turnosModel.list();
            const pacientes = await pacientesModel.list();

            const turnosPaciente = turnos.map(turno => {
                const paciente = pacientes.find(paciente => paciente.id === turno.idPaciente);
                return { ...turno, nombrePaciente: paciente ? `${paciente.nombre} ${paciente.apellido}`: 'Paciente no encontrado' };
            });

            res.render('turnos/index', { turnos: turnosPaciente});
        } catch (error) {
            res.status(500).send("Error al obtener los turnos");
        }
    }
    async formularioTurno(req,res){
        const pacientes = await pacientesModel.list();
        res.render('turnos/formulario',{pacientes});
    }
}

module.exports = new TurnosViewController();