(function () {
  var app = angular.module("kaching.account");
  app.factory("AccountService", ["$http", accountService]);

  function accountService($http) {
    return {
      getAccount: function () {
        return $http({url: "http://localhost:3000/api/account", method: "GET"});
      }
    };
  }
})();

