module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('user', 'addrPost', {
      type: Sequelize.CHAR(5),
    })
  },
  down: async (queryInterface, _Sequelize) => {
    // await queryInterface.dropTable('users');
  },
}
