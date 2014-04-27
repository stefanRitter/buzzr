'use strict';

module.exports = function (url) {
  var processedUrl = url;
  if (url.indexOf('www.google.com/url?') > -1 && url.indexOf('&url=') > -1) {
    processedUrl = url.split('&url=')[1].split('&')[0];
    processedUrl = decodeURIComponent(processedUrl);
  }
  return processedUrl;
};
