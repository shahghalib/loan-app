const Joi = require('joi');
const { LOAN_STATUS, LOAN_STATUS_FILTER } = require('../enums/loan-status.enum');

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

// Validates ?status=&page=&limit= on GET /api/loan
const getLoansQuerySchema = Joi.object({
  status: Joi.string()
    .valid(...Object.values(LOAN_STATUS_FILTER))
    .optional()
    .default(LOAN_STATUS_FILTER.ALL),
  page: Joi.number().integer().min(1).optional().default(1),
  limit: Joi.number().integer().min(1).max(100).optional().default(10),
});

module.exports = { createLoanSchema, updateLoanSchema, getLoansQuerySchema };
