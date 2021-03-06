'use strict';

var Buzzr = require('mongoose').model('Buzzr'),
    fork = require('child_process').fork;


exports.getByTopic = function (req, res) {
  var topic = decodeURI(req.params.id).toLowerCase().trim();

  Buzzr.findOne({topic: topic}).exec(function (err, buzzr) {
    if (err) { return res.json({err: err}); }
    
    if (!buzzr) {
      fork('server/utils/buzzrMaker.js').send({topic: topic});
      return res.json({newBuzzr: true});
    }
    
    buzzr.viewed();
    res.send({
      links: buzzr.activeLinks,
      lastUpdated: buzzr.lastUpdated
    });
  });
};

exports.getAdminList = function (req, res) {
  Buzzr.find({}, function(err, collection) {
    if (err) { return res.json({err: err}); }

    var buzzrs = [];

    collection.forEach(function (buzzr){
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

exports.update = function (req, res) {
  var topic = decodeURI(req.params.id).toLowerCase().trim();
  
  Buzzr.findOne({topic: topic}).exec(function (err) {
    if (err) { return res.json({err: err}); }

    fork('server/utils/buzzrMaker.js').send({topic: topic});
    res.send(200);
  });
};

exports.putAdmin = function () {
};

exports.deleteAdmin = function (req, res) {
  var topic = decodeURI(req.params.id).toLowerCase().trim();

  Buzzr.findOne({topic: topic}).exec(function (err, buzzr) {
    if (err) { return res.json({err: err}); }
    if (!buzzr) { return res.json({err: err}); }
    
    buzzr.remove();
    res.send({refresh: true});
  });
};
