'use strict';

var Buzzr = require('mongoose').model('Buzzr');

exports.getByTopic = function (req, res) {
  var topic = decodeURI(req.params.id).toLowerCase().trim();

  Buzzr.findOne({topic: topic}).exec(function (err, buzzr) {
    if (err) { return res.json({err: err}); }
    
    if (!buzzr) {
      var buzzrCreator = require('child_process').fork('server/utils/buzzrCreator.js');
      buzzrCreator.send({topic: topic});
      return res.json({links: []});
    }
    
    buzzr.viewed();
    var length = buzzr.activeLinks.length - 123;
    res.send({links: buzzr.activeLinks.slice(length, 120)});
  });
};
