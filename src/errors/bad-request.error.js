const BaseError = require('./base.error');
const HTTP_STATUS = require('../enums/http-status.enum');

class BadRequestError extends BaseError {
  constructor(message = 'Bad request') {
    super(message, HTTP_STATUS.BAD_REQUEST);
  }
}

module.exports = BadRequestError;
