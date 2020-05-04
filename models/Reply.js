"use strict";
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define(
    "Reply",
    {
      response: DataTypes.STRING,
    },
    {}
  );
  Reply.associate = function (models) {
    Reply.hasOne(models.Consultation);
  };
  return Reply;
};
