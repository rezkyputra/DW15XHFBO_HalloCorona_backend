const { Consultation, Reply, User } = require("../models");

exports.create = async (req, res) => {
  try {
    const reply = await Reply.create(req.body);
    const newreply = await Reply.findOne({
      where: { id: reply.userId },
      include: [
        {
          model: Consultation,
          attributes: {
            exclude: ["createdAt", "updatedAt", "UserId", "userId"],
          },
          include: [
            {
              model: User,
              attributes: ["id", "username"],
            },
          ],
        },
      ],
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "ConsultationId", "consultationId"],
      },
    });
    res.status(201).send({ data: newreply });
  } catch (error) {
    res.status(500).send({ message: "Failed to create Reply" });
    console.log(error);
  }
};

exports.index = async (req, res) => {
  try {
    const reply = await Reply.findAll({
      include: [
        {
          model: Consultation,
          attributes: {},
          // include: [
          //   {
          //     model: User,
          //     attributes: ["id", "username"],
          //   },
          // ],
          exclude: ["createdAt", "updatedAt", "UserId", "userId"],
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "ConsultationId", "consultationId"],
      },
    });
    res.send({ data: reply });
  } catch (error) {
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const reply = await Reply.findOne({
      where: { userId: req.params.id },
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Consultation,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt",
          "UserId",
          "userId",
          "consultationId",
          "ConsultationId",
        ],
      },
    });
    res.send({ data: reply });
  } catch (error) {
    console.log(error);
  }
};

exports.showReply = async (req, res) => {
  try {
    const replies = await reply.findAll({
      where: { consultationId: req.params.id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      order: [["id", "ASC"]],
    });
    res.status(200).send({ data: replies });
  } catch (error) {
    res.status(500).send({ message: "Failed to view user reply!" });
    console.log(error);
  }
};
