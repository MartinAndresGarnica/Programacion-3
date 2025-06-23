'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize){
    await queryInterface.bulkInsert('Libros', [
      {
        title: 'Cien años de soledad',
        description: 'Novela emblemática de Gabriel García Márquez.',
        status: 'Pendiente',
        genero: 'Realismo mágico',
        reseña: 'Una obra maestra de la literatura latinoamericana.',
        calificacion: 5,
      },
      {
        title: 'El principito',
        description: 'Un cuento poético con ilustraciones.',
        status: 'Leido',
        genero: 'Fábula',
        reseña: 'Un libro para niños y adultos por igual.',
        calificacion: 4,
      },
      {
        title: '1984',
        description: 'Distopía escrita por George Orwell.',
        status: 'Pendiente',
        genero: 'Ciencia ficción',
        reseña: 'Una advertencia sobre los peligros del totalitarismo.',
        calificacion: 5,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Libros', null, {});
  }
   
};
