'use strict';

var occurenceCounter = require('../../../../worder/process/occurenceCounter.js');

describe('occurenceCounter', function () {
  var simpleTopic = 'test',
      complexTopic = 'unit test';

  var link = {
    headText: '',
    bodyText: ''
  };
  
  it('should return -1 when the value is not present', function() {
    occurenceCounter(link, simpleTopic);
    occurenceCounter(link, complexTopic);
    [1,2,3].indexOf(5).should.equal(-1);
    [1,2,3].indexOf(0).should.equal(-1);
  });
});
