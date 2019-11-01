module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users',
    {
      id:
        {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
        },
      socialId: {
        type: Sequelize.STRING,
        allowNull: true
      }, 
      name:
        {
          allowNull: false,
          type: Sequelize.STRING,
        },
      username:
        {
          allowNull: false,
          type: Sequelize.STRING,
        },
      email:
        {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING,
        },
      password:
        {
          allowNull: false,
          type: Sequelize.STRING,
        },
      verified: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt:
        {
          allowNull: false,
          type: Sequelize.DATE,
        },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface) /* , Sequelize */ => queryInterface.dropTable('Users'),
};
