'use strict';

var Tweet4me = require('mongoose').model('Tweet4me');

exports.getByUser = function(req, res) {
  var user = req.params.id.toLowerCase().trim();

  Tweet4me.findOne({user: user}).exec(function(err, tweet4me) {
    if (err) { return res.send(500); }
    if (!tweet4me) { return res.json({tweets: []}); }

    res.json({tweets: tweet4me.tweets});
  });
};
