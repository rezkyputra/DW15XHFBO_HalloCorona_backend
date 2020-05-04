const { Consultation, User } = require("../models");

exports.create = async (req, res) => {
  try {
    const consul = await Consultation.create(req.body);
    const newconsul = await Consultation.findOne({
      where: { id: consul.id },
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "UserId", "userId"],
      },
    });
    res.send({ data: newconsul });
  } catch (error) {
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const consul = await Consultation.findOne({
      where: { id: req.params.id },
      attributes: {
        exclude: ["createdAt", "updatedAt", "UserId", "userId"],
      },
    });
    res.send({ data: consul });
  } catch (error) {
    console.log(error);
  }
};

exports.index = async (req, res) => {
  try {
    const consul = await Consultation.findAll({
      attributes: {
        exclude: ["updatedAt", "UserId", "userId"],
      },
    });
    res.send({ data: consul });
  } catch (error) {
    console.log(error);
  }
};
