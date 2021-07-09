const winston = require('winston');

const environment = process.env.NODE_ENV || 'development';

const logger = winston.createLogger({
    level: environment === 'development' ? 'debug' : 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        winston.format.printf(({ level, message, timestamp }) =>
            `${level}: ${[timestamp]} ${message}`)),
    transports: [
        new winston.transports.Console({
            stderrLevels: ['error'],
        })
    ]
});


module.exports = logger;