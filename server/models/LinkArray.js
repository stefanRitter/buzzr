'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var linkArraySchema = new Schema({
  name:  {type: String, default: ''},
  array: [{
    url: String,
    topic: String,
    rank: Number
  }]
});

linkArraySchema.methods.push = function(data) {
  this.array.push(data);
  this.save();
};

linkArraySchema.methods.pop = function() {
  var link = this.array.pop();
  this.save();
  return link;
};


var LinkArray = mongoose.model('LinkArray', linkArraySchema);


exports.createArrays = function() {
  LinkArray.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      LinkArray.create({name: 'titleErrorLinks'});
      LinkArray.create({name: 'socketErrorLinks'});
      LinkArray.create({name: 'newLinks'});
    }
  });
};
