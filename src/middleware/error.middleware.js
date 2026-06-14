const HTTP_STATUS = require('../enums/http-status.enum');

const errorHandler = (err, req, res, next) => {

  const statusCode = err.statusCode || err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Something went wrong';

  console.error(`[ERROR] ${statusCode} - ${message}`);

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
};

module.exports = errorHandler;
