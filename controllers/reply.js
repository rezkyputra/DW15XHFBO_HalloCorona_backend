const { Consultation, Reply, User } = require("../models");

exports.create = async (req, res) => {
  try {
    const reply = await Reply.create(req.body);
    const newreply = await Reply.findOne({
      where: { id: reply.id },
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
      attributes: {
        exclude: ["createdAt", "updatedAt", "ConsultationId", "consultationId"],
      },
    });
    res.send({ data: reply });
  } catch (error) {
    console.log(error);
  }
};
