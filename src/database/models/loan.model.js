'use strict';

module.exports = (sequelize, DataTypes) => {
  const { LOAN_STATUS } = require('../../enums/loan-status.enum');

  const Loan = sequelize.define(
    'Loan',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      applicant_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      tenure_months: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      purpose: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM(...Object.values(LOAN_STATUS)),
        allowNull: false,
        defaultValue: LOAN_STATUS.PENDING,
      },
    },
    {
      tableName: 'loans',
      underscored: true,
    }
  );

  return Loan;
};
