"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Consultations",
      [
        {
          fullname: "Yusril",
          phone: "083896833132",
          bordDate: "2020-04-17",
          age: 26,
          height: 165,
          weight: 49,
          gender: "male",
          subject: "sakit kepala",
          liveConsul: "2020-04-17",
          description: "sakit kepala banget ini kalau tidak ada uang",
          userId: 1,
          status: "waiting approve consultation live",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Consultations", null, {});
  },
};
