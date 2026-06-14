const BaseError = require('./base.error');
const HTTP_STATUS = require('../enums/http-status.enum');

class NotFoundError extends BaseError {
  constructor(message = 'Resource not found') {
    super(message, HTTP_STATUS.NOT_FOUND);
  }
}

module.exports = NotFoundError;
