const { Consultation, User, Reply } = require("../models");

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
      where: { userId: req.params.id },
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
      attributes: {
        exclude: ["updatedAt", "UserId"],
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
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
      attributes: {
        exclude: ["updatedAt", "UserId"],
      },
    });
    res.send({ data: consul });
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    await Consultation.update(req.body, { where: { id: req.params.id } });
    const newconsul = await Consultation.findOne({
      where: { id: req.params.id },
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
