'use strict';

const express = require('express');
const mongo = require('./config/mongoose');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// get twitts
require('./fetcher');

// CORS enabled
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  next();
});

// Middlewares
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// API routes
require('./app_api/routes')(app);

// JS route
app.get('/twitter-demo.js', (req, res) => {
  console.log('js requested');
  res.sendFile(path.join(__dirname + '/app_client/main.js'));
});

module.exports = app;
