const Turno = require("./../mock/entities/turno.entity.js");

class TurnosModel{
    constructor(){
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
        )
        this.id = 2
    }

    getTurnosByIdPaciente(idPaciente){
        return new Promise((resolve, reject) => {
            try {
                const identificador = Number(idPaciente);
                const turnosEncontrado = this.data.filter(turno => turno.idPaciente === identificador)
                resolve(turnosEncontrado.length > 0 ? turnosEncontrado : null);
            } catch (error) {
                reject(error);
            }
        })
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

    list(){
        return new Promise((resolve, reject) => {
            resolve(this.data);
        });
    }
}

module.exports = new TurnosModel