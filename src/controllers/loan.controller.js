const loanService = require('../services/loan.service');
const HTTP_STATUS = require('../enums/http-status.enum');
const asyncHandler = require('../middleware/async-handler.middleware');

const getAllLoans = asyncHandler(async (req, res) => {
  const { status, page, limit } = req.query;
  const result = await loanService.getAllLoans({ status, page, limit });
  res.status(HTTP_STATUS.OK).json({ success: true, ...result });
});

const getLoanById = asyncHandler(async (req, res) => {
  const loan = await loanService.getLoanById(req.params.id);
  res.status(HTTP_STATUS.OK).json({ success: true, data: loan });
});

const createLoan = asyncHandler(async (req, res) => {
  const loan = await loanService.createLoan(req.body);
  res.status(HTTP_STATUS.CREATED).json({ success: true, data: loan });
});

const updateLoan = asyncHandler(async (req, res) => {
  const loan = await loanService.updateLoan(req.params.id, req.body);
  res.status(HTTP_STATUS.OK).json({ success: true, data: loan });
});

const deleteLoan = asyncHandler(async (req, res) => {
  const result = await loanService.deleteLoan(req.params.id);
  res.status(HTTP_STATUS.OK).json({ success: true, ...result });
});

module.exports = { getAllLoans, getLoanById, createLoan, updateLoan, deleteLoan };
