'use strict';

var User = require('./User'),
    StringArray = require('./StringArray');

User.createDefaultUsers();
StringArray.createArrays();

require('./Buzzr');
