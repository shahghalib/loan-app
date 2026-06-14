const Joi = require('joi');
const LOAN_STATUS = require('../enums/loan-status.enum');

const createLoanSchema = Joi.object({
  applicant_name: Joi.string().required().max(100),
  amount: Joi.number().precision(2).required().min(1),
  tenure_months: Joi.number().integer().required().min(1),
  purpose: Joi.string().required().max(255),
  status: Joi.string().valid(...Object.values(LOAN_STATUS)).optional(),
});

const updateLoanSchema = Joi.object({
  applicant_name: Joi.string().optional().max(100),
  amount: Joi.number().precision(2).optional().min(1),
  tenure_months: Joi.number().integer().optional().min(1),
  purpose: Joi.string().optional().max(255),
  status: Joi.string().valid(...Object.values(LOAN_STATUS)).optional(),
}).min(1);

module.exports = { createLoanSchema, updateLoanSchema };
