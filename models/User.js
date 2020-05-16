"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
      gender: {
        type: DataTypes.ENUM,
        values: ["male", "female"],
        defauldValue: "male",
      },
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    User.belongsTo(models.Role);
    User.hasMany(models.Article);
    User.hasOne(models.Consultation);
    User.hasOne(models.Reply);
  };
  return User;
};
