'use strict';

var request = require('request'),
    cheerio = require('cheerio'),
    googleDecoder = require('../process/googleDecoder.js');

var tweets = [],
    newLinks = [],
    doneCount = 0,
    doneAll = 0,
    cb;


function done() {
  doneCount += 1;
  if (doneCount >= doneAll) {
    cb(newLinks);
  }
}


function updateUrl(tweet) {
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


module.exports = function(_tweets, _cb) {
  tweets = _tweets;
  cb = _cb;
  doneCount = 0;
  doneAll = tweets.length;

  console.log('REQUESTING: '+doneAll);
  tweets.forEach(updateUrl);
};
