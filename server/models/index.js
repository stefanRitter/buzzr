'use strict';

var User = require('./User'),
    StringArray = require('./StringArray'),
    LinkArray = require('./LinkArray');

User.createDefaultUsers();
StringArray.createArrays();
LinkArray.createArrays();

require('./Buzzr');
