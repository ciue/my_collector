const winston = require('winston');
require('winston-daily-rotate-file');

const { Logger, transports } = winston;
const { Console, DailyRotateFile } = transports;


const logger = new Logger({
  transports: [
    new Console(),
    new DailyRotateFile({
      name: 'base_logger',
      filename: 'logs/info.log',
      prepend: true,
      dataPattern: 'yyyy-MM-dd.log',
      level: 'info',
    }),
    new DailyRotateFile({
      name: 'error_logger',
      filename: 'logs/error.log',
      prepend: true,
      dataPattern: 'yyyy-MM-dd.log',
      leavel: 'error',
    }),
  ],
});

module.exports = logger;

logger.info('testing');
logger.error('testing');
