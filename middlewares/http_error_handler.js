const HTTPBaseError = require('../error/http_base_error');
const logger = require('../utills/loggers/logger');

function errorHandler(opts) {
  return function (err, req, res, next) {
    if (err instanceof HTTPBaseError) {
      const errMeta = {
        query: req.query,
        url: req.originalUrl,
        userInfo: req.user,
      };
      logger.error(err.message, errMeta);
      res.httpStatusCode = err.HTTPStatusCode;
      res.json({
        code: err.errCode,
        msg: err.httpmsg,
      });
    } else {
      next(err);
    }
  };
}

module.exports = errorHandler;
