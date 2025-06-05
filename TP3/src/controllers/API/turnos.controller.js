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

    async cancelarTurno(req, res) {
    try {
        const idTurno = parseInt(req.params.idTurno);
        const cancelado = await turnosModel.cancelarTurno(idTurno);

        if (!cancelado) {
            return res.status(404).json({
                success: false,
                message: `No se encontró el turno con id ${idTurno}`
            });
        }

        res.status(200).json({
            success: true,
            message: `Turno ${idTurno} cancelado correctamente.`
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

    async list(req, res) {
        res.status(200).json(await turnosModel.list());
    }
}

module.exports = new TurnosController