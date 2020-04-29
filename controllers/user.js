const { User } = require("../models");

exports.show = async (req, res) => {
  try {
    const article = await User.findOne({
      where: { id: req.params.id },
      attributes: { exclude: ["createdAt", "updatedAt", "RoleId"] },
    });
    res.send({ data: article });
  } catch (error) {
    console.log(error);
  }
};
