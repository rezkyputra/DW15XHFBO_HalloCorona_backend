"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Replies",
      [
        {
          id: 1,
          response:
            "Hi Harwin hari ini adalah jadwal konsultasi kamu silahkan klik link berikut untuk melakukan konsultasi secara langsung kepada saya : Dr. Anto Ariza",
          consultationId: 1,
          userId: 1,
          userIdDoc: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("People", null, {});
  },
};
