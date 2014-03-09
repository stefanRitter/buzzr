'use strict';

var Buzzr = require('mongoose').model('Buzzr'),
    search = require('./search.js');


function start(req, res, next) {
  var topic = decodeURI(req.params.id);

  Buzzr.findOne({topic: topic}, function(err, buzzr) {
    if (err) { next(err); }
    
    if (buzzr === null) {
      Buzzr.create({topic: topic}, function(err, newBuzzr) {
        if (err) { next(err); }
        search.get(newBuzzr);
        res.send(200);
      });

    } else {
      search.get(buzzr);
      res.send(200);
    }
  });
}

module.exports = function(app, config, topic) {
  
  app.get( '/:id', start);

  app.listen(config.port+1);
  console.log('listening on port ' + (config.port+1));
};

