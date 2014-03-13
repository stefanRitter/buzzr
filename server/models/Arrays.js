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
