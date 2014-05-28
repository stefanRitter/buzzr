'use strict';

module.exports = function(link, topic) {
  if (!link.bodyText) { return false; }

  var searchBody = link.bodyText.search(topic),
      found = searchBody > -1;

  if (!found) {
    var words = topic.split(' '),
        wordsFound = [];

    words.forEach(function(word, i) {
      searchBody = link.bodyText.search(word);
      wordsFound[i] = searchBody > -1;
    });

    found = wordsFound.indexOf(false) === -1;
  }
  
  return found;
};
