"use strict";
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define(
    "Reply",
    {
      response: DataTypes.STRING,
      consultationId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Reply.associate = function (models) {
    Reply.belongsTo(models.Consultation);
    Reply.belongsTo(models.User);
  };
  return Reply;
};
