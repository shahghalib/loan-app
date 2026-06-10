const express = require('express');
const router = express.Router();

const loanController = require('../controllers/loan.controller');
const validateRequest = require('../middleware/validate-request.middleware');
const { createLoanSchema, updateLoanSchema } = require('../schemas/loan.schema');

router.get('/', loanController.getAll);

router.post('/', validateRequest(createLoanSchema), loanController.create);

router.get('/:id', loanController.getOne);

router.put('/:id', validateRequest(updateLoanSchema, 'body'), loanController.update);

router.delete('/:id', loanController.remove);

module.exports = router;
