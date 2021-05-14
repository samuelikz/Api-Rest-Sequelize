'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Usuarios',
        'senha',
        {
          type: Sequelize.STRING(20)
        }
      )
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Usuarios', 'senha')
    ])
  }
};
