'use strict';

var env = require('node-env-file');
env('.env');

function start() {
  var express = require('express');

  var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
      config = require('./server/config/config')[env],
      app = express();

  console.log(process.env);

  // setup datastore
  require('./server/config/mongoose.js')(config);

  // setup express
  require('./server/config/express.js')(app, config);

  // setup auth
  require('./server/config/passport.js')();

  // setup routes
  require('./server/config/routes.js')(app);


  app.listen(config.port);
  console.log('listening on port ' + config.port);
}

setTimeout(start, 2000);
