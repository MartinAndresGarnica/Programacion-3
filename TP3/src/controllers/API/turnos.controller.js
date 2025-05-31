const turnosModel = require("./../../models/mock/turnos.models.js");
const Turno = require("./../../models/mock/entities/turno.entity.js");

class TurnosController{
    async getTurnosByIdPaciente(req, res) {
        try {
            const idPaciente = req.params.idPaciente;
            const turnosEncontrados = await turnosModel.getTurnosByIdPaciente(idPaciente);
            if (!turnosEncontrados) {
                return res.status(404).json({
                    success: false,
                    message: `no se encontraron turnos para el paciente con el id:${idPaciente}`
                })
            }
            res.status(200).json(turnosEncontrados);
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message,
            });
        }
    }

    async list() {
        res.status(200).json(await turnosModel.list());
    }
}

module.exports = new TurnosController