const loanService = require('../services/loan.service');
const HTTP_STATUS = require('../enums/http-status.enum');

const getAll = async (req, res, next) => {
  try {
    const loans = await loanService.getAll();
    res.status(HTTP_STATUS.OK).json({ success: true, data: loans });
  } catch (err) {
    next(err);
  }
};

const getOne = async (req, res, next) => {
  try {
    const loan = await loanService.getOne(req.params.id);
    res.status(HTTP_STATUS.OK).json({ success: true, data: loan });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const loan = await loanService.create(req.body);
    res.status(HTTP_STATUS.CREATED).json({ success: true, data: loan });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const loan = await loanService.update(req.params.id, req.body);
    res.status(HTTP_STATUS.OK).json({ success: true, data: loan });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const result = await loanService.remove(req.params.id);
    res.status(HTTP_STATUS.OK).json({ success: true, ...result });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getOne, create, update, remove };
