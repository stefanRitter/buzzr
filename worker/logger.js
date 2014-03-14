'use strict';

var fs = require('fs'),
    path = require('path'),
    date = new Date(),
    today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

function stringify(data) {
  var newData = '{ '
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      newData += key + ': ' + data[key] + ', ';
    }
  }
  return newData + ' }';
}

function write2Log(func, data) {
  if (typeof data === 'object') {
    if (typeof data.join === 'function') {
      data = '['+data.join(', ')+']';
    } else {
      data = stringify(data);
    }
  }
  
  fs.appendFile(
    path.resolve('../logs/worker-'+today+'.log'),
    func + ': ' + data+'\n',
    function (err) {
      if (err) { throw err; }
    });
}

function logger(func) {
  return function() {
    console[func].apply(console, arguments);

    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(obj) {
      write2Log(func, obj);
    });
  };
}

module.exports = {
  log: logger('log'),
  error: logger('error'),
  debug: logger('debug'),
  warn: logger('warn')
};
