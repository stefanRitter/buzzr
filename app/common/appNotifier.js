angular.module('app').value('appToastr', {
  success: function () {},
  error: function() {}
});

angular.module('app').factory('appNotifier', function (appToastr) {
  return {
    notify: function (msg) {
      appToastr.success(msg);
      console.log(msg);
    },
    error: function (msg) {
      appToastr.error(msg);
      console.log(msg);
    }
  };
});
