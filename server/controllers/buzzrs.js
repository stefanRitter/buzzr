'use strict';

var Buzzr = require('mongoose').model('Buzzr'),
    arr = require('../utils/arrays.js'),
    buzzrCreator = require('child_process').fork('server/utils/buzzrCreator.js');

exports.getByTopic = function(req, res) {
  var topic = decodeURI(req.params.id).toLowerCase().trim();

  Buzzr.findOne({topic: topic}).exec(function(err, buzzr) {
    if (err) { return res.json({err: err}); }
    
    if (!buzzr || buzzr.activeLinks.length === 0) {
      buzzrCreator.send({topic: topic});
      return res.json({links: []});
    }
    
    buzzr.viewed();
    res.send({
      links: buzzr.activeLinks,
      lang: buzzr.lang
    });
  });
};

exports.getAdminList = function(req, res) {
  Buzzr.find({}, function(err, collection) {
    if (err) { return res.json({err: err}); }

    var buzzrs = [],
        topics = [];
    
    arr.topics.erase();
    collection.forEach(function(buzzr){
      topics.push(buzzr.topic);
      buzzrs.push({
        topic: buzzr.topic,
        lastViewed: buzzr.lastViewed,
        lastUpdated: buzzr.lastUpdated,
        passiveLinks: buzzr.passiveLinks.length,
        activeLinks: buzzr.activeLinks.length,
        lang: buzzr.lang
      });
    });
    
    arr.topics.set(topics);
    res.json({buzzrs: buzzrs});
  });
};

exports.putAdmin = function() {
};
