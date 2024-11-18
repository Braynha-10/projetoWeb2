'use strict';

const {v4: uuidv4} = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usuarios', [
      {
        username: 'Todd',
        password: '1234',
        patch: 'Profissao'
      },
      {
        username: 'Bryan',
        password: '1234',
        patch: 'Hobby'
      },
      {
        username: 'Latrel',
        password: '1234',
        patch: 'Estudo'
      },
      {
        username: 'Julius',
        password: '1234',
        patch: 'Estudo'
      }
        
    ], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('usuarios', null, {});
  }
};
