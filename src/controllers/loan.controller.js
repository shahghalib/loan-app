const getAll = (req, res, next) => {
  try {
    res.status(200).json({ success: true, message: 'Get all loans - placeholder' });
  } catch (err) {
    next(err);
  }
};

const getOne = (req, res, next) => {
  try {
    res.status(200).json({ success: true, message: `Get loan with id ${req.params.id} - placeholder` });
  } catch (err) {
    next(err);
  }
};

const create = (req, res, next) => {
  try {
    res.status(201).json({ success: true, message: 'Create loan - placeholder' });
  } catch (err) {
    next(err);
  }
};

const update = (req, res, next) => {
  try {
    res.status(200).json({ success: true, message: `Update loan with id ${req.params.id} - placeholder` });
  } catch (err) {
    next(err);
  }
};

const remove = (req, res, next) => {
  try {
    res.status(200).json({ success: true, message: `Delete loan with id ${req.params.id} - placeholder` });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getOne, create, update, remove };
