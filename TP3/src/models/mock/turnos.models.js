const Turno = require("./../mock/entities/turno.entity.js");

class TurnosModel{
    constructor(){
        this.data = [];
        this.data.push(
            new Turno(
                1,
                1,
                new Date(),
                "Consulta"
            )
        )
        this.id = 2
    }

    getTurnosByIdPaciente(idPaciente){
        return new Promise((resolve, reject) => {
            try {
                const identificador = Number(idPaciente);
                const turnoEncontrado = this.data.find(turno => turno.idPaciente === identificador)
                resolve(turnoEncontrado||null);
            } catch (error) {
                reject(error);
            }
        })
    }

    list(){
        return new Promise((resolve, reject) => {
            resolve(this.data);
        });
    }
}

module.exports = new TurnosModel