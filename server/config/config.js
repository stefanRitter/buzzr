'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    datastoreURI: 'mongodb://localhost/buzzr',
    rootPath: rootPath,
    port: 3030,
    stripeSecret: 'sk_test_Ndya4eXFlDlm1ySefxlwjG4v',
    stripeKey: 'pk_test_A92gZzXMijuUIYouO3UXkIyB',
    buffer: {
      id: '536f41e3bf67f04b36d5a530',
      secret: '59a7e5fa33413a5d1dab36d70704cfc2',
      callback: 'http://localhost:3030/auth/buffer/callback'
    }
  },
  
  production: {
    datastoreURI: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
    rootPath: rootPath,
    port: process.env.PORT,
    stripeSecret: 'sk_live_OJInktE9Nc0sjoSfNddg10De',
    stripeKey: 'pk_live_xGJ0UWxpKbFmhRVaXUcMDuIG',
    buffer: {
      id: '536f3ce4bf67f02f07d5a5d5',
      secret: '1027d5a5f63d51746febd38ce35257f3',
      callback: 'http://www.buzzr.io/auth/buffer/callback'
    }
  }
};
