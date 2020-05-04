const { Article, User } = require("../models");

exports.index = async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "name", "roleId"],
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt", "userId", "UserId"] },
    });
    res.send({ data: articles });
  } catch (error) {
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const article = await Article.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          attributes: ["id", "name", "roleId"],
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt", "userId", "UserId"] },
    });
    res.send({ data: article });
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    const newarticle = await Article.findOne({
      where: { id: article.id },
      include: [
        {
          model: User,
          attributes: ["id", "username", "roleId"],
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "UserId", "userId"],
      },
    });
    res.send({ data: newarticle });
  } catch (error) {
    console.log(error);
  }
};
