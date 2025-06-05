const Identificador = require("./identificador.entity");
class Turno extends Identificador{
    constructor(id, idPaciente, fecha, motivo, estado){
       super(id);
       this.idPaciente = idPaciente;
       this.fecha = fecha;
       this.motivo = motivo;
       this.estado = estado
    }
}
module.exports = Turno;