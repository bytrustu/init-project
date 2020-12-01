export const logHandler = (err, req, res, next) => {
  console.log(`[${new Date()}]` + '\n' + err.stack);
  next(err);
};

export const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  next(err);
};