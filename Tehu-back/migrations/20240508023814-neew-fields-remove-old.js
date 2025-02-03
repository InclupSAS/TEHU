'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.resolve();
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('devices', 'lgn_start');
    await queryInterface.removeColumn('devices', 'lgn_end');
  }
};