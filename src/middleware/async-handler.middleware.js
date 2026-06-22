// Wraps an async controller function so any thrown error or rejected
// promise is automatically forwarded to next(err) — no try/catch needed
// inside the controller itself.
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
