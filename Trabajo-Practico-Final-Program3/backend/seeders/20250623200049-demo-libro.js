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
        autor: 'Gabriel García Márquez',
        reseña: 'Una obra maestra de la literatura latinoamericana.',
        calificacion: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'El principito',
        description: 'Un cuento poético con ilustraciones.',
        status: 'Leido',
        genero: 'Fábula',
        autor: 'Antoine de Saint-Exupéry',
        reseña: 'Un libro para niños y adultos por igual.',
        calificacion: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '1984',
        description: 'Distopía escrita por George Orwell.',
        status: 'Pendiente',
        genero: 'Ciencia ficción',
        autor: 'George Orwell',
        reseña: 'Una advertencia sobre los peligros del totalitarismo.',
        calificacion: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Libros', null, {});
  }
   
};
