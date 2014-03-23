'use strict';

var request = require('request'),
    cheerio = require('cheerio'),
    logger = require('../common/logger.js');

module.exports = function (link, cb, done) {
  var shortUrl = link.url;

  request(
  {
    method: 'GET',
    url: shortUrl,
    followAllRedirects: true,
    timeout: 6000,
    headers: {
      'User-Agent':
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/33.0.1750.149 Safari/537.36'
    }
  },
  
  function (err, response, body) {
    if (err) {
      return cb(err, link, done);
    }

    if (response.statusCode !== 200) {
      return logger.error('URL STATUS ERROR', shortUrl, response.statusCode);
    }

    var $ = cheerio.load(body),
        title = $('title').first().text().trim();

    link.url = response.request.href;
    link.title = title;
    cb(null, link, done);
  });
};

