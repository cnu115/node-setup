const express = require('express');
const cros = require('cors');
const dotenv = require('dotenv');

const corsOptions = require('./config/corsOptions');
const errorHandler = require('./middlewares/error');
const logger = require('./config/logger');

// environment variable config 
dotenv.config();


const app = express();

app.use(cros({ corsOptions }));

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    logger.info(req.hostname + ' connecting')
    res.send('Welcome to GE Operationational Portal');
});

// handling the errors

app.all('*', (req, res, next) => {
    // const err = new Error('A standard error')
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`
    });
    // next(err)
});

app.use(errorHandler);

module.exports = app;