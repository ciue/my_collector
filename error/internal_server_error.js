const HTTPBaseError = require('./http_base_error');

const ERROR_CODE = 5000000;

// 数据库返回异常
class InternalServerError extends HTTPBaseError {
  constructor(msg) {
    super(500, '服务器好像开小差啦～～请稍后刷新', ERROR_CODE, `something wrong ${msg}`);
  }
}

module.exports = InternalServerError;
