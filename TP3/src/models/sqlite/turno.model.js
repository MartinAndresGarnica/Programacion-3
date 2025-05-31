const { Turno } = require('./entities/turno.entity.js');

class TurnoModel {
    getTurnoModel() {
        const turnos = Turno.findAll();
        return turnos;
    }

    getTurnoById(id) {
        return new Promise((resolve, reject) => {
            const turno = Turno.findByPk(id);
            if (!turno) {
                reject(new Error('Turno no encontrado'));
            }
            resolve(turno);
        })
    }
}
