module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: {
      type: STRING,
      allowNull: false,
      defaultValue: 'default_username',
    },
    email: {
      type: STRING,
      allowNull: false,
      defaultValue: 'default@example.com',
    },
    phone: {
      type: STRING,
      allowNull: true,
      defaultValue: '000-0000-0000',
    },
  });

  return User;
};
