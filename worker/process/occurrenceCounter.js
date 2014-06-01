'use strict';

module.exports = function() {return true;};
/*function (link, topic) {
  var searchHead = link.headText.search(topic),
      searchBody = link.bodyText.search(topic),
      found = searchHead !== -1 && searchBody !== -1;

  if (!found) {
    var words = topic.split(' '),
        wordsFound = [];

    words.forEach(function(word, i) {
      searchHead = link.headText.search(word);
      searchBody = link.bodyText.search(word);
      wordsFound[i] = searchHead !== -1 && searchBody !== -1;
    });

    found = wordsFound.indexOf(false) === -1;
  }
  //return found;
  return true;
};*/
