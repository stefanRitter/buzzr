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
        search.create(newBuzzr);
        res.send(200);
      });

    } else {
      search.update(buzzr);
      res.send(200);
    }
  });
}

module.exports = function(app, config, topic) {
  
  app.get('/all', function(req, res) {
    Buzzr.find().exec(function (err, collection) {
      res.send(collection);
    });
  });

  app.get('/:id/links', function(req, res) {
    var topic = decodeURI(req.params.id);
    Buzzr.findOne({topic: topic}).exec(function (err, buzzr) {
      if (err || !buzzr) { return res.send(404); }
      res.json(buzzr.passiveLinks).json(buzzr.activeLinks);
    });
  });

  app.get( '/:id', start);

  app.listen(3031);
  console.log('listening on port 3031');
};

