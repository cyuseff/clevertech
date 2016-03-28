'use strict';

const express = require('express');
const mongo = require('./config/mongoose');
const bodyParser = require('body-parser');
const app = express();

// get twitts
//require('./fetcher');

// Middlewares
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
require('./app_api/routes')(app);

module.exports = app;
