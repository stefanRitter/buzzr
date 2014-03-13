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
  
  retiredLinks: [{
    url:        String,
    title:      String,
    rank:       Number,
    activated:  Date,
    updated:    Date
  }]
});


buzzrSchema.methods.pushLink = function(data) {
  // Example data:
  // data.url: 'http://instagram.com/p/QhLtWhB_A1/'
  // data.title: 'Photo by sofishlin &bull; Instagram'
  // data.rank: 5

  var pI = _.findIndex(this.passiveLinks, function(link) {
    return link.url === data.url || link.title === data.title;
  });

  if (pI > -1) {
    var newRank = this.passiveLinks[pI].rank;
    newRank += data.rank === 0 ? 1 : data.rank;

    if (newRank > this.minRank) {
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
  }


  var aI = _.findIndex(this.activeLinks, function(link) {
    return link.url === data.url || link.title === data.title;
  });

  if (aI > -1) {
    this.activeLinks[aI].rank += data.rank === 0 ? 1 : data.rank;
    this.activeLinks[aI].updated = Date.now();
    return this.save();
  }

  
  // this link is new
  var newLink = {
    url: data.url,
    title: data.title,
    rank: data.rank,
    updated: Date.now()
  };
  if (newLink.rank > this.minRank) {
    newLink.activated = Date.now();
    this.activeLinks.push(newLink);
  } else {
    this.passiveLinks.push(newLink);
  }
  this.save();
};

Buzzr = mongoose.model('Buzzr', buzzrSchema);
