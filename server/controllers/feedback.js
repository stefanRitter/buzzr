'use strict';

var sendgrid  = require('sendgrid')(
  process.env.SENDGRID_USERNAME,
  process.env.SENDGRID_PASSWORD
);

exports.createFeedback = function(req, res) {
  var feedback = req.body;

  sendgrid.send({
    to: ['stefan@stefanritter.com', 'jeroen.h.s.roosen@gmail.com'],
    from: feedback.email,
    subject: 'BUZZR FEEDBACK from ' + feedback.name,
    text: feedback.message
  }, function(err, json) {
    if (err) { return console.error(err); }
    console.log(json);
  });

  res.json({success: true});
};

exports.tweet4me = function(req, res) {
  var t4m = req.body;
  console.log(t4m);

  sendgrid.send({
    to: ['stefan@stefanritter.com'],
    from: t4m.email,
    subject: 'NEW BUZZR TWEET4ME',
    text: t4m.topic + ' for ' + t4m.email + ' with plan: ' + t4m.plan,
  }, function(err, json) {
    if (err) {
      res.json({error: err.toString()});
      return console.error(err);
    }
    console.log(json);
    res.json({success: true});
  });
};