'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    datastoreURI: 'mongodb://localhost/buzzr',
    rootPath: rootPath,
    port: 3030,
    stripeSecret: 'sk_test_Ndya4eXFlDlm1ySefxlwjG4v',
    stripeKey: 'pk_test_A92gZzXMijuUIYouO3UXkIyB'
  },
  
  production: {
    datastoreURI: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
    rootPath: rootPath,
    port: process.env.PORT,
    stripeSecret: 'sk_live_OJInktE9Nc0sjoSfNddg10De',
    stripeKey: 'pk_live_xGJ0UWxpKbFmhRVaXUcMDuIG'
  }
};
