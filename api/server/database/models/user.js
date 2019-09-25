export default (sequelize, DataTypes) => {
  const User = sequelize.define('User',
    {
      name: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      isVerified:{
        type: DATATypes.BOOLEAN,
      },
    }, {});
    User.associate = (models) => {
      User.hasMany(models.Book, {
        foreignKey: 'userId',
      });

      User.hasMany(models.Verification, {
        foreignKey: 'userId',
      });
    };
  return User; 
};