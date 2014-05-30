angular.module('app').factory('appTimeToUpdate', function() {
  'use strict';

  var timeLeft = {
    timeLeft: function() {
      var d = new Date(),
          h = d.getUTCHours(),
          m = d.getUTCMinutes(),
          updateStatus = '';

      if (h > 4) {
        updateStatus = 'Next update in '+ (27-h) +'hrs and '+(60-m)+'min';
      } else if (h < 4) {
        updateStatus = 'Next update in '+ (4-h) +'hrs and '+(60-m)+'min';
      } else {
        updateStatus = 'Buzzr is looking for new links, stay tuned...';
      }

      return updateStatus;
    }
  };

  return timeLeft;
});
