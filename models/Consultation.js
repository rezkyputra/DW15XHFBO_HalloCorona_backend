"use strict";
module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define(
    "Consultation",
    {
      fullname: DataTypes.STRING,
      phone: DataTypes.STRING,
      replyId: DataTypes.STRING,
      bordDate: DataTypes.DATE,
      age: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      gender: {
        type: DataTypes.ENUM,
        values: ["male", "female"],
        defauldValue: "male",
      },
      subject: DataTypes.STRING,
      liveConsul: DataTypes.DATE,
      description: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      status: {
        type: DataTypes.ENUM,
        values: [
          "waiting approve consultation live",
          "waiting live consultation",
          "cancel",
        ],
        defauldValue: "waiting live consultation",
      },
    },
    {}
  );
  Consultation.associate = function (models) {
    Consultation.belongsTo(models.User);
    Consultation.belongsTo(models.Reply);
  };
  return Consultation;
};
