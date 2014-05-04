'use strict';

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var sendgrid  = require('sendgrid')(
  process.env.SENDGRID_USERNAME,
  process.env.SENDGRID_PASSWORD
);


exports.send = function(text) {
  sendgrid.send({
    to: ['stefan@stefanritter.com', 'jeroen.h.s.roosen@gmail.com'],
    from: 'server@buzzr.io',
    subject: 'BUZZR SERVER MESSAGE from ' + env,
    text: text
  }, function(err, json) {
    if (err) { return console.error(err); }
    console.log(json);
  });
};
