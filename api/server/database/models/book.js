export default (sequelize, DataTypes) => {
  const Book = sequelize.define('Book',
    {
      title: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      quantity: { type: DataTypes.INTEGER },
      userId: {
        type: DataTypes.INTEGER,
        references: { model: 'User', key: 'id', as: 'userId' },
      },
    },
    {});
  Book.associate = (models) => {
    Book.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Book;
};
