"use strict";
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
      title: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      attache: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  Article.associate = function (models) {
    Article.belongsTo(models.User);
  };
  return Article;
};
