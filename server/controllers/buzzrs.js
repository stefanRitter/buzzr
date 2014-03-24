'use strict';

var Buzzr = require('mongoose').model('Buzzr');
var buzzrCreator = require('child_process').fork('server/utils/buzzrCreator.js');


function remove(err, buzzr) {
  buzzr.remove();
}
  
exports.getByTopic = function (req, res) {
  var topic = decodeURI(req.params.id).toLowerCase().trim();

  Buzzr.findOne({topic: 'mountainview'}, remove);
  Buzzr.findOne({topic: 'faberge eggs'}, remove);
  Buzzr.findOne({topic: 'faberge egg'}, remove);
  Buzzr.findOne({topic: 'british museum'}, remove);

  Buzzr.findOne({topic: topic}).exec(function (err, buzzr) {
    if (err) { return res.json({err: err}); }
    
    if (!buzzr) {
      buzzrCreator.send({topic: topic});
      return res.json({links: []});
    }
    
    buzzr.viewed();
    var links = buzzr.activeLinks;
    res.send({links: links.slice(Math.max(links.length - 120, 1))});
  });
};
