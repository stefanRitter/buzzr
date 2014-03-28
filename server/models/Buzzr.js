'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('lodash'),
    buzzrSchema,
    Buzzr;


buzzrSchema = new Schema({
  topic: {
    type:     String,
    required: '{PATH} is required!',
    unique:   true,
    index:    true,
    trim:     true
  },

  lang: {type: String, default: 'en'},

  lastViewed: Date,
  lastUpdated: Date,
  
  twitPoints: {
    maxId:        {type: String, default: '0'},
    sinceId:      {type: String, default: '0'},
    nextSinceId:  {type: String, default: '0'}
  },

  minRank: {type: Number, default: 1},

  activeLinks:  [{
    url:        String,
    title:      String,
    rank:       Number,
    activated:  Date,
    updated:    Date,
    lang:       String
  }],
  
  passiveLinks: [{
    url:        String,
    title:      String,
    rank:       Number,
    activated:  Date,
    updated:    Date,
    lang:       String
  }]
});

buzzrSchema.pre('save', function (next) {
  this.lastUpdated = Date.now();
  next();
});

buzzrSchema.methods.viewed = function() {
  this.lastViewed = Date.now();
  this.save();
};

buzzrSchema.methods.saveCb = function(cb) {
  var that = this;
  this.save(function(err) {
    if (err) {
      if (err.toString().indexOf('VersionError') > -1) {
        console.log('CONCURRENT SAVE ERROR: '+that.topic);
      } else {
        if (cb) { return cb(err); }
        throw err;
      }
    }
    if (cb) { cb(); }
  });
};

buzzrSchema.methods.makeUniq = function() {
  var tempA = _.uniq(this.activeLinks, 'title'),
      tempP = _.uniq(this.passiveLinks, 'title');
  
  tempA = _.uniq(tempA, 'url');
  tempP = _.uniq(tempP, 'url');

  this.activeLinks = tempA;
  this.passiveLinks = tempP;
  this.save();
};

buzzrSchema.methods.pushLink = function(data, cb) {
  // data.url, data.rank, data.title, data.lang
  function checkLinkEquality(link) {
    return link.url === data.url || link.title === data.title;
  }

  var pI = _.findIndex(this.passiveLinks, checkLinkEquality);
  if (pI > -1) {
    return this.updatePassiveLink(data, pI, cb);
  }

  var aI = _.findIndex(this.activeLinks, checkLinkEquality);
  if (aI > -1) {
    return this.updateActiveLink(data, aI, cb);
  }

  this.pushNewLink(data, cb);
};

buzzrSchema.methods.pushNewLink = function(data, cb) {
  var newLink = {
    url: data.url,
    title: data.title,
    rank: data.rank,
    updated: Date.now(),
    lang: data.lang
  };
  if (newLink.rank >= this.minRank) {
    newLink.activated = Date.now();
    this.activeLinks.push(newLink);
  } else {
    this.passiveLinks.push(newLink);
  }

  if (this.activeLinks.length > 200) {
    this.activeLinks = this.activeLinks.slice(Math.max(this.activeLinks.length - 200, 1));
  }
  if (this.passiveLinks.length > 1000) {
    this.passiveLinks = this.passiveLinks.slice(Math.max(this.passiveLinks.length - 1000, 1));
  }
  this.saveCb(cb);
};

buzzrSchema.methods.updateActiveLink = function(data, aI, cb) {
  this.activeLinks[aI].rank += data.rank === 0 ? 1 : data.rank;
  this.activeLinks[aI].updated = Date.now();
  this.saveCb(cb);
};

buzzrSchema.methods.updatePassiveLink = function(data, pI, cb) {
  var newRank = this.passiveLinks[pI].rank;
  newRank += data.rank === 0 ? 1 : data.rank;

  if (newRank >= this.minRank) {
    this.activeLinks.push({
      url: data.url,
      title: data.title,
      rank: newRank,
      activated: Date.now(),
      updated: Date.now(),
      lang: data.lang
    });

    this.passiveLinks.splice(pI, 1);
  } else {
    this.passiveLinks[pI].rank = newRank;
    this.passiveLinks[pI].updated = Date.now();
  }
  this.saveCb(cb);
};

Buzzr = mongoose.model('Buzzr', buzzrSchema);
