const Joi = require('joi');
const { id } = require('../models/mock/pacientes.models');

const turnoSchema = {
    create: Joi.object({
        idPaciente: Joi.number().integer().positive().required(),
        fecha: Joi.date().required(),
        motivo: Joi.string().required(),
        estado: Joi.string().required()
    }),
    update: Joi.object({
        idPaciente: Joi.number().integer().positive().required(),
        fecha: Joi.date().required(),
        motivo: Joi.string().required(),
        estado: Joi.string().required()
    }),
    get: Joi.object({
        campo: Joi.string().valid('id', 'idPaciente', 'fecha', 'motivo', 'estado').required(),
        valor: Joi.alternatives()
            .conditional('campo', [
                { is: 'id', then: Joi.number().integer().positive().required() },
                { is: 'idPaciente', then: Joi.number().integer().positive().required() },
                { is: 'fecha', then: Joi.date().required() },
                { is: 'motivo', then: Joi.string().required() },
                { is: 'estado', then: Joi.string().required() }
            ])
    }),
    delete: Joi.object({
        idTurno: Joi.number().integer().positive().required()
    }),

    getByIdPaciente: Joi.object({
        idPaciente: Joi.number().integer().positive().required()
    })
}

module.exports =  turnoSchema ;