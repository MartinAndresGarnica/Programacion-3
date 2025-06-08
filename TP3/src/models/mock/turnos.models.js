const Turno = require("./../mock/entities/turno.entity.js");

class TurnosModel {
    constructor() {
        this.data = [];
        this.data.push(
        new Turno(
            1,
            1,
            new Date(),
            "Consulta",
            "Reservado"
        ),
        new Turno(
            2,
            null,
            new Date(),
            "",
            "Disponible"
        )
        );
        this.id = 2; 
    }

    getTurnosByIdPaciente(idPaciente) {
        return new Promise((resolve, reject) => {
        try {
            const identificador = Number(idPaciente);
            const turnosEncontrado = this.data.filter(turno => turno.idPaciente === identificador);
            resolve(turnosEncontrado.length > 0 ? turnosEncontrado : null);
        } catch (error) {
            reject(error);
        }
        });
    }

    async mostrarTurnos(req, res) {
        try {
            const turnos = await turnosModel.list();
            const pacientes = await pacientesModel.list();
            console.log('Turnos en mostrarTurnos:', turnos);
            const turnosPaciente = turnos.map(turno => {
                const paciente = pacientes.find(paciente => paciente.id === turno.idPaciente);
                return { ...turno, nombrePaciente: paciente ? `${paciente.nombre} ${paciente.apellido}` : 'Paciente no encontrado' };
            });
            res.render('turnos/index', { turnos: turnosPaciente });
        } catch (error) {
            res.status(500).send("Error al obtener los turnos");
        }
    }

    cancelarTurno(idTurno) {
        return new Promise((resolve, reject) => {
        try {
            const id = Number(idTurno);
            const index = this.data.findIndex(turno => turno.id === id);
            if (index === -1) return resolve(false);

            this.data.splice(index, 1);
            resolve(true);
        } catch (error) {
            reject(error);
        }
        });
    }

    list() {
        return new Promise((resolve, reject) => {
        resolve(this.data);
        });
    }

    findById(id) {
        return new Promise((resolve, reject) => {
        try {
            const identificador = Number(id);
            const turnoEncontrado = this.data.find(turno => turno.id === identificador);
            resolve(turnoEncontrado || null);
        } catch (error) {
            reject(error);
        }
        });
    }

    update(id, turnoActualizado) {
        return new Promise((resolve, reject) => {
        try {
            const identificador = Number(id);
            const index = this.data.findIndex(turno => turno.id === identificador);
            if (index === -1) {
            return reject(new Error("Turno no encontrado"));
            }
            console.log('Antes de actualizar:', this.data[index]);
            this.data[index] = turnoActualizado;
            console.log('Después de actualizar:', this.data[index]);
            resolve(turnoActualizado);
        } catch (error) {
            reject(error);
        }
        });
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
            const actualizado = await turnosModel.update(idTurno, turno);
            console.log('Turno actualizado:', actualizado); 
            res.redirect('/turnos'); 
        } catch (error) {
            console.error(error);
            res.status(500).send("Error al asignar paciente al turno");
        }
    }
}

module.exports = new TurnosModel();
