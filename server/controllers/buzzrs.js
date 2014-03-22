'use strict';

var Buzzr = require('mongoose').model('Buzzr'),
    buzzrCreator = require('child_process').fork('server/utils/buzzrCreator.js');


exports.getByTopic = function (req, res) {
  var topic = decodeURI(req.params.id).toLowerCase().trim();

  Buzzr.findOne({topic: topic}).exec(function (err, obj) {
    if (err) { return res.json({err: err}); }
    
    if (!obj) {
      buzzrCreator.send({topic: topic});
      return res.json({links: []});
    }
    
    res.send({links: obj.activeLinks});
  });
};
