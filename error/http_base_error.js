class HTTPBaseError extends Error {
  constructor(HTTPStatusCode, httpMsg, errCode, msg) {
    super(`HTTP ERROR: ${msg}`);

    this.HTTPStatusCode = HTTPStatusCode;
    this.httpmsg = httpMsg;
    this.errCode = errCode;
    this.msg = msg;
  }
}

module.exports = HTTPBaseError;

