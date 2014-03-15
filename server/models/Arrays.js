'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

function push(data) {
  /*jshint validthis:true */
  this.array.push(data);
  this.save();
}



var titleErrorLinksSchema = new Schema({
  name:  {type: String, default: 'titleErrorLinks'},
  array: {type: [String], default: []}
});
titleErrorLinksSchema.methods.push = push;
var TitleErrorLinks = mongoose.model('TitleErrorLinks', titleErrorLinksSchema);


var socketErrorLinksSchema = new Schema({
  name:  {type: String, default: 'socketErrorLinks'},
  array: {type: [String], default: []}
});
socketErrorLinksSchema.methods.push = push;
var SocketErrorLinks = mongoose.model('SocketErrorLinks', socketErrorLinksSchema);


var topicsSchema = new Schema({
  name:  {type: String, default: 'topics'},
  array: {type: [String], default: []}
});
topicsSchema.methods.push = push;
var Topics = mongoose.model('Topics', topicsSchema);


function createArray(array) {
  array.find({}).exec(function(err, collection) {
    if (collection.length === 0) {
      array.create({});
    }
  });
}

exports.createArrays = function() {
  createArray(TitleErrorLinks);
  createArray(SocketErrorLinks);
  createArray(Topics);
};
