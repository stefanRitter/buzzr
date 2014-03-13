'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    arraysSchema,
    Arrays;


arraysSchema = new Schema({
  socketErrorLinks:  [String],
  titleErrorLinks: [String]
});


Arrays = mongoose.model('Arrays', arraysSchema);

exports.createDefaultArrayDump = function () {
  Arrays.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      Arrays.create({ socketErrorLinks: [], titleErrorLinks: []});
    }
  });
};
