const { extend } = require("joi");
const Identificador = require("./identificador.entity");
class Turno extends Identificador{
    constructor(dni,nombre,apellido,email,password,id=0){
       super(id);
       
    }
}
module.exports = Turno;