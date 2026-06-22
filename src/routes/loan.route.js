const express = require('express');
const router = express.Router();

const loanController = require('../controllers/loan.controller');
const validateRequest = require('../middleware/validate-request.middleware');
const {
  createLoanSchema,
  updateLoanSchema,
  getLoansQuerySchema,
} = require('../schemas/loan.schema');

router.get('/', validateRequest(getLoansQuerySchema, 'query'), loanController.getAllLoans);
router.post('/', validateRequest(createLoanSchema), loanController.createLoan);
router.get('/:id', loanController.getLoanById);
router.put('/:id', validateRequest(updateLoanSchema, 'body'), loanController.updateLoan);
router.delete('/:id', loanController.deleteLoan);

module.exports = router;
