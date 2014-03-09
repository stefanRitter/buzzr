'use strict';

var mongoose = require('mongoose'),
    buzzrSchema,
    Buzzr;


buzzrSchema = mongoose.Schema({
  topic: {
    type: String,
    required: '{PATH} is required!',
    unique: true,
    index: true
  }
});

Buzzr = mongoose.model('Buzzr', buzzrSchema);
