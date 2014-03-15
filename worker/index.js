'use strict';

var Buzzr = require('mongoose').model('Buzzr'),
    search = require('./search.js');


function start(req, res, next) {
  var topic = decodeURI(req.params.id);

  Buzzr.findOne({topic: topic}, function(err, buzzr) {
    if (err) { next(err); }
    
    if (buzzr === null) {
      // 'https://www.googleapis.com/language/translate/v2/detect?q=' +
      // req.params.id + '&key=' + process.env.GOGL_API_KEY
      Buzzr.create({topic: topic}, function(err, newBuzzr) {
        if (err) { next(err); }
        search.create(newBuzzr);
        res.send(200);
      });

    } else {
      /*var created = new Date(buzzr._id.getTimestamp()),
          today = (new Date()).toLocaleDateString();

      if (today === created.toLocaleDateString()) {
        logger.log(topic, 'was created too recently, skipping...');
        return res.send(200);
      }*/
      search.update(buzzr);
      res.send(200);
    }
  });
}

module.exports = function(app) {
  
  app.get('/api/all', function(req, res) {
    Buzzr.find().exec(function (err, collection) {
      res.send(collection);
    });
  });

  app.get('/api/:id/links', function(req, res) {
    var topic = decodeURI(req.params.id);
    Buzzr.findOne({topic: topic}).exec(function (err, buzzr) {
      if (err || !buzzr) { return res.send(404); }
      res.json(buzzr.passiveLinks).json(buzzr.activeLinks);
    });
  });

  app.get( '/api/:id', start);

  app.listen(8080);
  console.log('listening on port 8080');
};
