'use strict';

var Buzzr = require('mongoose').model('Buzzr'),
    arr = require('../utils/arrays.js');


function registerNewTopic(topic) {
  // TODO: remove duplicates
  arr.newTopics.push(topic);
}

exports.getByTopic = function (req, res) {
  var topic = decodeURI(req.params.id);

  Buzzr.findOne({topic: topic}).exec(function (err, obj) {
    if (err) { return res.json({err: err}); }
    
    if (!obj) {
      registerNewTopic(topic);
      return res.json({links: []});
    }
    
    res.send({links: obj.activeLinks});
  });
};
