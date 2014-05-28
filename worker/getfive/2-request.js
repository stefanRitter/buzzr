'use strict';

var request = require('request'),
    cheerio = require('cheerio'),
    Batch = require('batch'),
    googleDecoder = require('../process/googleDecoder.js');

var newLinks = [];


function updateUrl(tweet, done) {
  var shortUrl = googleDecoder(tweet.url);

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
      console.error(err);
      return done();
    }

    if (response.statusCode !== 200) {
      console.error('URL STATUS ERROR', shortUrl, response.statusCode);
      return done();
    }

    var $ = cheerio.load(body),
        title = $('title').first().text().trim();

    tweet.url = response.request.href;
    tweet.title = title;
    tweet.lang = 'en';
    tweet.bodyText = $('body').text();
    tweet.headText = $('head').text();
    newLinks.push(tweet);
    done();
  });
}


module.exports = function(tweets, cb) {
  console.log('REQUESTING: ' + tweets.length);

  var batch = new Batch();
  batch.concurrency(5);

  tweets.forEach(function(tweet){
    batch.push(function(done){
      updateUrl(tweet, done);
    });
  });

  batch.on('progress', function() {});
  batch.end(function(err) {
    if (err) { throw err; }
    cb(newLinks);
  });
};
