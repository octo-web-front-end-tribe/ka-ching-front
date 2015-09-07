(function () {
  var app = angular.module("kaching.homepage");
  app.factory("AccountService", ["$http", accountService]);

  function accountService($http) {
    return {
      getAccount: function (callback) {
        $http({url: "http://localhost:3000/api/account", method: "GET"})
          .success(function (data) {
            callback(null, data);
          })
          .error(function () {
            callback("error");
          });
      }
    };
  }
})();

