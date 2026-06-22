const LOAN_STATUS = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
};

// Used specifically for the GET filter query param (?status=...)
const LOAN_STATUS_FILTER = {
  ALL: 'all',
  ...LOAN_STATUS,
};

module.exports = { LOAN_STATUS, LOAN_STATUS_FILTER };
