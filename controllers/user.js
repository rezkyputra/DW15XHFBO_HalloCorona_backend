const { User } = require("../models");

exports.index = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "RoleId"] },
    });
    res.send({ data: users });
  } catch (error) {
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      attributes: { exclude: ["createdAt", "updatedAt", "RoleId"] },
    });
    res.send({ data: user });
  } catch (error) {
    console.log(error);
  }
};
