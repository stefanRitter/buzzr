'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    datastoreURI: 'mongodb://localhost/buzzr',
    rootPath: rootPath,
    port: 3030
  },
  
  production: {
    datastoreURI: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
    rootPath: rootPath,
    port: process.env.PORT || 3030
  }
};
