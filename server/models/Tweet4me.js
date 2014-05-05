'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    tweet4meSchema,
    Tweet4me;


tweet4meSchema = new Schema({
  user: {type: String},

  topic: {type: String},

  lastViewed: Date,
  
  tweets:  [{
    url:    String,
    text:   String,
    added:  Date
  }]
});

tweet4meSchema.methods.viewed = function() {
  this.lastViewed = Date.now();
  this.save();
};

Tweet4me = mongoose.model('Tweet4me', tweet4meSchema);
