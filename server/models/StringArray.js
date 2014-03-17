'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('lodash');


var stringArraySchema = new Schema({
  name:  {type: String, default: ''},
  array: {type: [String], default: []}
});

stringArraySchema.methods.push = function(data) {
  this.array.push(data);
  this.save();
};

stringArraySchema.methods.uniq = function() {
  this.array = _.uniq(this.array);
  this.save();
  return this.array;
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
