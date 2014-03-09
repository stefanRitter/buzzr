'use strict';

var Buzzr = require('mongoose').model('Buzzr');


exports.getByTopic = function (req, res) {
  var topic = decodeURI(req.params.id);

  Buzzr.findOne({topic: topic}).exec(function (err, obj) {
    if (err) { return res.json({err: err); }
    res.send(obj);
  });
};
