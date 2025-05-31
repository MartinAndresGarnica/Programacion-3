const { sequelize } = require('./sqlite/config/db/db');
const { Paciente } = require('./sqlite/entities/paciente.entity');
const { Turno } = require('./sqlite/entities/turno.entity');

// Asociaciones
Paciente.hasMany(Turno, { foreignKey: 'idPaciente' });
Turno.belongsTo(Paciente, { foreignKey: 'idPaciente' });

module.exports = {
  sequelize,
  Paciente,
  Turno
};