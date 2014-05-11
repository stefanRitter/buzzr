'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bufferSchema,
    Buffer;


bufferSchema = new Schema({
  user: {type: String, unique: true},

  topics: [String],

  plan: {type: String, default: 'startup'},
  
  updates:  [{
    topic:   String,
    url:     String,
    text:    String,
    added:   Date
  }]
});

bufferSchema.methods.isDublicate = function(url) {
  var index = -1;
  this.updates.forEach(function(tw, i) {
    if (tw.url === url) {
      index = i;
    }
  });
  return index !== -1;
};

Buffer = mongoose.model('Buffer', bufferSchema);

Buffer.find({}).exec(function(err, collection) {
  if (collection.length === 0) {
    return;
  }
});