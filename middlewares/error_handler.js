const logger = require('../utills/loggers/logger');

function handler(opts) {
  return function (err, req, res, next) {
    logger('uncaught error in the middlerwares process', err);
  };
}

module.exports = handler;
