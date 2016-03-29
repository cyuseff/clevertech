'use strict';

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/clevertech';

// Events
mongoose.connection
  .on('connected', () => console.log(`Mongoose connected to: ${dbURI}`))
  .on('error', (err) => console.log(`Mongoose error: ${err}`))
  .on('disconected', () => console.log('Mongoose disconected'));

mongoose.connect(dbURI);

module.exports = mongoose;
