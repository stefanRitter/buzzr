'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var titleErrorLinksSchema,
    TitleErrorLinks,
    socketErrorLinksSchema,
    SocketErrorLinks;

function push(data) {
  this.array.push(data);
  this.save();
}


titleErrorLinksSchema = new Schema({
  name:  {type: String, default: 'titleErrorLinks'},
  array: {type: [String], default: []}
});
titleErrorLinksSchema.methods.push = push;
TitleErrorLinks = mongoose.model('TitleErrorLinks', titleErrorLinksSchema);

socketErrorLinksSchema = new Schema({
  name:  {type: String, default: 'socketErrorLinks'},
  array: {type: [String], default: []}
});
socketErrorLinksSchema.methods.push = push;
SocketErrorLinks = mongoose.model('SocketErrorLinks', socketErrorLinksSchema);


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
};
