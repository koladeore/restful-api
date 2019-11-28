export default (sequelize, DataTypes) => {
  const Book = sequelize.define('Book',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      title: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      imageName: {
        type: DataTypes.TEXT,
      },
      quantity: { type: DataTypes.INTEGER },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
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
