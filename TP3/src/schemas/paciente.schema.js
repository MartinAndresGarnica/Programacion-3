const Joi = require('joi');

const pacienteSchema = {
    create: Joi.object({
        dni: Joi.string().pattern(/^\d+$/).required().messages({
            'string.pattern.base': 'El DNI debe ser un número'
        }),
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    }),

    update: Joi.object({
        dni: Joi.string().pattern(/^\d+$/).required().messages({
            'string.pattern.base': 'El DNI debe ser un número'
        }),
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    }),

    login: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    }),

    get: Joi.object({
        campo: Joi.string().valid('id', 'dni', 'nombre', 'apellido').required(),
        valor: Joi.alternatives()
            .conditional('campo', [
                { is: 'id', then: Joi.number().integer().positive().required() },
                { is: 'dni', then: Joi.string().pattern(/^\d+$/).required() },
                { is: 'nombre', then: Joi.string().required() },
                { is: 'apellido', then: Joi.string().required() },
            ])
    }),

    delete: Joi.object({
        id: Joi.number().integer().positive().required()
    }),

    getById: Joi.object({
        id: Joi.number().integer().positive().required()
    })

}

module.exports = pacienteSchema;