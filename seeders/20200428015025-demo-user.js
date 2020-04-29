"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Dr. Ardi",
          username: "ardi",
          email: "Ardi@gmail.com",
          password: "123",
          roleId: 1,
          gender: "male",
          phone: "081999333444",
          address: "Pare pare",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andi Ismail",
          username: "andi",
          email: "andi@gmail.com",
          password: "123",
          roleId: 2,
          gender: "male",
          phone: "081999333444",
          address: "Pangkep",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
