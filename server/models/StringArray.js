'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('lodash');


var stringArraySchema = new Schema({
  name:  {type: String, default: ''},
  array: {type: [String], default: []}
});

stringArraySchema.methods.push = function(stringData) {
  this.array.push(stringData);
};

stringArraySchema.methods.pop = function() {
  var obj = this.array.pop();
  return obj;
};

stringArraySchema.methods.pushUniq = function(stringData) {
  if (this.array.indexOf(stringData) === -1) {
    this.array.push(stringData);
  }
};


var StringArray = mongoose.model('StringArray', stringArraySchema);


exports.createArrays = function() {
  StringArray.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      StringArray.create({name: 'topics'});
      StringArray.create({name: 'newTopics'});
    }
  });
};
