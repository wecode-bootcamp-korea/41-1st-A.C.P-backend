const catchAsync = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((error) => next(error));
  };
};

const globalErrorHandler = (err, req, res, next) => {
  console.error(err.stack);
  console.error(err);

  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({ message: err.message });
};

module.exports = { catchAsync, globalErrorHandler };
