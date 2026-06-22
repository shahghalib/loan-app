'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('loans', [
      {
        id: uuidv4(),
        applicant_name: 'Ahmed Khan',
        amount: 500000.00,
        tenure_months: 24,
        purpose: 'Business expansion for a retail clothing store',
        status: 'APPROVED',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        applicant_name: 'Sara Malik',
        amount: 150000.00,
        tenure_months: 12,
        purpose: 'Home renovation and kitchen remodeling project',
        status: 'PENDING',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('loans', null, {});
  },
};
