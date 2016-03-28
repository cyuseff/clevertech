'use strict';

const Twitt = require('../models/Twitt');

module.exports.list = function(req, res) {
  let query = {};
  let proyection = {};
  let opts = {
    sort: { createdAt: -1 },
    limit: 5
  };
  Twitt.find(query, proyection, opts, (err, twitts) => {
    if(err) return res.status(400).json({err});
    return res.status(200).json({twitts});
  });
};
