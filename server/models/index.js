'use strict';

var User = require('./User'),
    Arrays = require('./Arrays');

User.createDefaultUsers();
Arrays.createArrays();

require('./Buzzr');
