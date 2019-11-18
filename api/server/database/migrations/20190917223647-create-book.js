module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Books', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID
    },
    title: { allowNull: false, type: Sequelize.STRING },
    author: { allowNull: false, type: Sequelize.STRING },
    description: { allowNull: false, type: Sequelize.STRING },
    quantity: { allowNull: false, type: Sequelize.INTEGER },
    userId: {
      allowNull: false,
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: { model: 'Users', key: 'id', as: 'userId' }
    },
    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE }
  }),
  down: (queryInterface) /* , Sequelize */ => queryInterface.dropTable('Books')
};
