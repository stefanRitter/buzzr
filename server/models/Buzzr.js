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
  
  twitPoints: {
    maxId: {type: String},
    sinceId: {type: String},
    nextSinceId: {type: String}
  },

  minRank: {type: Number, default: 1},

  activeLinks:  [{
    url:        String,
    title:      String,
    rank:       Number,
    activated:  Date,
    updated:    Date
  }],
  
  passiveLinks: [{
    url:        String,
    title:      String,
    rank:       Number,
    activated:  Date,
    updated:    Date
  }],

  timedoutLinks: [{
    url:        String,
    title:      String,
    rank:       Number,
    activated:  Date,
    updated:    Date
  }]
});

buzzrSchema.methods.pushLink = function(data) {
  function checkLinkEquality(link) {
    return link.url === data.url || link.title === data.title;
  }

  if (!!data.err) { return this.pushErrorLink(data); }

  var pI = _.findIndex(this.passiveLinks, checkLinkEquality);
  if (pI > -1) {
    return this.updatePassiveLink(data, pI);
  }

  var aI = _.findIndex(this.activeLinks, checkLinkEquality);
  if (aI > -1) {
    return this.updateActiveLink(data, aI);
  }

  this.pushNewLink(data);
};

buzzrSchema.methods.pushErrorLink = function(data) {
  var newLink = {
    url: data.url,
    title: data.title,
    rank: data.rank,
    updated: Date.now()
  };
  this.timedoutLinks.push(newLink);
  return this.save();
};

buzzrSchema.methods.pushNewLink = function(data) {
  var newLink = {
    url: data.url,
    title: data.title,
    rank: data.rank,
    updated: Date.now()
  };
  if (newLink.rank >= this.minRank) {
    newLink.activated = Date.now();
    this.activeLinks.push(newLink);
  } else {
    this.passiveLinks.push(newLink);
  }
  this.save();
};

buzzrSchema.methods.updateActiveLink = function(data, aI) {
  this.activeLinks[aI].rank += data.rank === 0 ? 1 : data.rank;
  this.activeLinks[aI].updated = Date.now();
  this.save();
};

buzzrSchema.methods.updatePassiveLink = function(data, pI) {
  var newRank = this.passiveLinks[pI].rank;
  newRank += data.rank === 0 ? 1 : data.rank;

  if (newRank >= this.minRank) {
    this.activeLinks.push({
      url: data.url,
      title: data.title,
      rank: newRank,
      activated: Date.now(),
      updated: Date.now()
    });

    this.passiveLinks.splice(pI, 1);
  } else {
    this.passiveLinks[pI].rank = newRank;
    this.passiveLinks[pI].updated = Date.now();
  }
  return this.save();
};

Buzzr = mongoose.model('Buzzr', buzzrSchema);
