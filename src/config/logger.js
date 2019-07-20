import { resolve } from 'path';
import { logger } from 'express-winston';
import { format, createLogger, transports } from 'winston';
import 'winston-daily-rotate-file';

const formatter = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.printf(
    info => `${info.timestamp} | ${info.level}: ${info.message} - ${info.stack || ''}\n`,
  ),
);

const options = {
  file: {
    format: formatter,
    filename: resolve('_logs', `${process.env.APP_NAME}_%DATE%.log`),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
  },
  console: {
    level: 'debug',
    format: formatter,
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const transporters = [
  new transports.Console(options.console),
  new transports.DailyRotateFile(options.file),
];

export const expressWinston = () => logger({
  transports: transporters,
  requestWhitelist: ['url', 'headers', 'method', 'query', 'body'],
  msg({ method, url, body }, { statusCode, responseTime }) {
    return `${statusCode} ${method} ${responseTime}ms ${url} | payload: ${JSON.stringify(body, null, 2).replace(/\\n/g, '')}`;
  },
});

export default createLogger({ transports: transporters, exitOnError: false });
