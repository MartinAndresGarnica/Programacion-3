const { Paciente } = require('../sqlite/entities/paciente.entity.js');

class PacientesModel {
    getPacientesModel() {
        const users = Paciente.findAll();
        return users;
    }
    //TODO: agregar operaciones CRUD
    getPacientesByIdModel(id) {
        return new Promise((resolve, reject) => {
            const user = Paciente.findByPk(id);
            if (!user) {
                reject(new Error('Usuario no encontrado'));
            }
            resolve(user);
        });
    }
}

module.exports = new PacientesModel;
