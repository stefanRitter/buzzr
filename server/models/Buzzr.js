'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('lodash'),
    buzzrSchema,
    Buzzr;


buzzrSchema =new Schema({
  topic: {
    type:     String,
    required: '{PATH} is required!',
    unique:   true,
    index:    true,
    trim:     true
  },
  activeLinks:  [{
    url:      String, 
    title:    String,
    rank:     Number,
    updated:  Date
  }],
  passiveLinks: [{
    url:      String, 
    title:    String,
    rank:     Number,
    updated:  Date
  }],
  lang: {type: String, default: 'en'}
});


buzzrSchema.methods.pushLink = function(data) {
  // Example data:
  // data.url: 'http://instagram.com/p/QhLtWhB_A1/'
  // data.title: 'Photo by sofishlin &bull; Instagram'
  // data.rank: 5

  // TODO:
  // get rid of utm_* params


  var pI = _.findIndex(this.passiveLinks, function(link) {
    return link.url === data.url || link.title === data.title;
  });

  if (pI > -1) {
    var newRank = data.rank === 0 ? 1 : data.rank;

    this.activeLinks.push({
      url: data.url,
      title: data.title,
      rank: newRank,
      updated: Date.now()
    });

    this.passiveLinks.splice(pI, 1);
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
  if (newLink.rank > 0) {
    this.activeLinks.push(newLink);
  } else {
    this.passiveLinks.push(newLink); 
  }
  this.save();
};

Buzzr = mongoose.model('Buzzr', buzzrSchema);
