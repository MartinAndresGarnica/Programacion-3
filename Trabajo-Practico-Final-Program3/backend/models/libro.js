'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Libro.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    genero: DataTypes.STRING,
    reseña: DataTypes.STRING,
    calificacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Libro',
  });
  return Libro;
};