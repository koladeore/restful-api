export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      socialId: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      verified: {
        type: DataTypes.BOOLEAN
      }
    },
    {}
  );
  User.associate = (models) => {
    User.hasMany(models.Book, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return User;
};
