'use strict';

var Buzzr = require('mongoose').model('Buzzr'),
    buzzrCreator = require('child_process').fork('server/utils/buzzrCreator.js'),
    buzzrUpdator = require('child_process').fork('server/utils/buzzrUpdator.js');

exports.refreshByTopic = function(req, res) {
  var topic = decodeURI(req.params.id).toLowerCase().trim();
  console.log('UPDATE:', topic);
  
  Buzzr.findOne({topic: topic}).exec(function(err, buzzr) {
    if (err) { return res.json({err: err}); }
    
    if (!buzzr) {
      buzzrCreator.send({topic: topic});
      return res.json({newBuzzr: true});
    }
    var now = Date.now(),
        lastUpdated = now - buzzr.lastUpdated;

    console.log(lastUpdated);

    if (lastUpdated < 30000) {
      res.send({
        links: buzzr.activeLinks,
        lang: buzzr.lang
      });
    } else if (lastUpdated < 3*60000) {
      buzzrUpdator.send({topic: topic, past: true});
      return res.json({updating: true});
    } else {
      buzzrUpdator.send({topic: topic, future: true});
      return res.json({updating: true});
    }
  });
};

exports.getByTopic = function(req, res) {
  var topic = decodeURI(req.params.id).toLowerCase().trim();

  Buzzr.findOne({topic: topic}).exec(function(err, buzzr) {
    if (err) { return res.json({err: err}); }
    
    if (!buzzr) {
      buzzrCreator.send({topic: topic});
      return res.json({newBuzzr: true});
    }
    
    buzzr.viewed();
    res.send({
      links: buzzr.activeLinks,
      lang: buzzr.lang
    });
    /*if (topic === 'big data') {
      setTimeout(function() {
        res.send({
          links: buzzr.activeLinks,
          lang: buzzr.lang
        });
      }, 3 * 1000);
    }*/
  });
};

exports.getAdminList = function(req, res) {
  Buzzr.find({}, function(err, collection) {
    if (err) { return res.json({err: err}); }

    var buzzrs = [];

    collection.forEach(function(buzzr){
      buzzrs.push({
        topic: buzzr.topic,
        lastViewed: buzzr.lastViewed,
        lastUpdated: buzzr.lastUpdated,
        passiveLinks: buzzr.passiveLinks.length,
        activeLinks: buzzr.activeLinks.length,
        lang: buzzr.lang
      });
    });

    res.json({buzzrs: buzzrs});
  });
};

exports.putAdmin = function() {
};
