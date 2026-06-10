const Joi = require('joi');

const createLoanSchema = Joi.object({
  full_name: Joi.string().required().min(3).max(120),
  amount: Joi.number().required().min(500),
  purpose: Joi.string().required().min(10).max(500),
});

const updateLoanSchema = Joi.object({
  full_name: Joi.string().optional().min(3).max(120),
  amount: Joi.number().optional().min(500),
  purpose: Joi.string().optional().min(10).max(500),
}).min(1);

module.exports = { createLoanSchema, updateLoanSchema };
