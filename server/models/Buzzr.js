'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
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
    tweetIds:   [Number],
    url:        String,
    title:      String,
    rank:       Number,
    activated:  Date,
    updated:    Date,
    lang:       String
  }],
  
  passiveLinks: [{
    tweetIds:   [Number],
    url:        String,
    title:      String,
    rank:       Number,
    activated:  Date,
    updated:    Date,
    lang:       String
  }],

  archivedLinks: [{
    tweetIds:   [Number],
    url:        String,
    title:      String,
    rank:       Number,
    activated:  Date,
    updated:    Date,
    lang:       String
  }]
});

buzzrSchema.methods.viewed = function() {
  this.lastViewed = Date.now();
  this.save();
};

buzzrSchema.methods.saveCb = function(cb) {
  var that = this;
  this.lastUpdated = Date.now();
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

buzzrSchema.methods.addSortedLinks = function(links, cb) {
  
  if (links.length >= 5 && links[4].rank > 3) {
    // we have 5 good links
    this.archivedLinks = this.archivedLinks.concat(this.activeLinks);
    this.activeLinks = links.splice(0,5);
    this.passiveLinks = this.passiveLinks.concat(links);
  
  } else {
    // we need to take from the passive links
    var moreLinks = [],
        archivLinks = [];
    
    this.passiveLinks = this.passiveLinks.concat(links);
    this.passiveLinks.sort(function(a, b) { return b.rank-a.rank; });

    for (var i = 0; i < 5; i++) {
      var newLink = this.passiveLinks[i];
      if (newLink.rank > 2) {
        moreLinks.push(newLink);
      }
    }

    archivLinks = this.activeLinks.splice(0, moreLinks.length);
    this.archivedLinks = this.archivedLinks.concat(archivLinks);
    this.activeLinks = this.activeLinks.concat(moreLinks);
  }

  this.saveCb(cb);
};

Buzzr = mongoose.model('Buzzr', buzzrSchema);
