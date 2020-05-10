const { Consultation, Reply } = require("../models");

exports.create = async (req, res) => {
  try {
    await Reply.create(req.body);
    const newreply = await Reply.findOne({
      where: { id: reply.id },
      include: [{ model: Consultation }],
    });
    res.status(201).send({ data: newreply });
  } catch (error) {
    res.status(500).send({ message: "Failed to create Reply" });
    console.log(error);
  }
};
