'use strict';

const express = require('express');
const mongo = require('./config/mongoose');
const bodyParser = require('body-parser');
const app = express();

require('./fetcher');

// Middlewares
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app;
