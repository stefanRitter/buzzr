String.prototype.trunc = function(n) {
  'use strict';
  return this.length > n ? this.substr(0, n-1) + '...' : this;
};
