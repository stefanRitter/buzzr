'use strict';

var redis = require('redis'),
    url = require('url'),
    redisURL = url.parse(process.env.REDISCLOUD_URL),
    client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});

module.exports = function(config) {
  client.auth(redisURL.auth.split(":")[1]); 
}
