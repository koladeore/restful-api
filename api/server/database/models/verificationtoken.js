export default (sequelize, DataTypes) => {
  const VerificationToken = sequelize.define('VerificationToken',
    {
      token: {
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.INTEGER,
        references: { model: 'User', key: 'id', as: 'userId', }
      }
    },
    {});
  VerificationToken.associate = (models) => {
    VerificationToken.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return VerificationToken;
};