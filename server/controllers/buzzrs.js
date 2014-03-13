'use strict';

var Buzzr = require('mongoose').model('Buzzr');


function createBuzzr() {
  // TODO
}


exports.getByTopic = function (req, res) {
  var topic = decodeURI(req.params.id);

  Buzzr.findOne({topic: topic}).exec(function (err, obj) {
    if (err) { return res.json({err: err}); }
    
    if (!obj) {
      createBuzzr(topic);
      return res.json({links: []});
    }
    
    res.send({links: obj.activeLinks});
  });
};
